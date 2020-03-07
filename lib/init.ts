import 'reflect-metadata';
import { Application, Context } from 'egg';
import { Container } from 'typedi';
import { PROVIDER_CONTEXT_STATUS, Registry, Consumer, Provider, SwaggerProvider, ProviderContext, ProviderChunk } from 'node-dubbo-ts';
import namespace from '../decorators/namespace';
import addProviderService from './providerFactory';
import { ComposeMiddleware, compose } from '../utils';
import { getInstance, contextId } from './instance';

export const start = async (app: Application) => {
  try {
    const { dubbo } = app.config;
    const registry = new Registry({
      ...dubbo.zookeeper,
    });
    const provider = new Provider({
      ...dubbo.provider,
      registry,
      pid: process.pid,
      logger: app.logger,
    });
    const consumer = new Consumer({
      ...dubbo.consumer,
      registry,
      pid: process.pid,
    });
    app.dubbo = {
      consumer,
      provider,
    };
    await addProviderService(app);
    provider.on('data', async (ctx: ProviderContext, chunk: ProviderChunk, next) => {
      try {
        const { method, interfaceName, requestId, interfaceVersion, parameters } = ctx.req;
        // @ts-ignore
        const eggContext: Context = app.createAnonymousContext({
          method: 'RPC',
          url: `/__rpc/dubbo/${interfaceName}/${method}/${interfaceVersion}?requestId=${requestId}`,
        });
        const rpcSerivce = getInstance(eggContext, chunk.interfacetarget);
        const property = rpcSerivce.constructor.prototype[method];
        const middlewares: ComposeMiddleware<Context>[] = dubbo.middlewares || [];
        const bindedMiddlewares: ComposeMiddleware<Context>[] = (
          Reflect.getMetadata(namespace.RPC_MIDDLEWARE, property) || []
        ).slice(0);
        eggContext.rpcContext = ctx;
        bindedMiddlewares.push(async ({ rpcContext }) => {
          const result = await rpcSerivce[method](...parameters);
          rpcContext.body = result;
        });
        const composed = compose<Context>(middlewares.concat(bindedMiddlewares));
        await composed(eggContext).catch(e => app.logger.error(e));
        ctx.status = PROVIDER_CONTEXT_STATUS.OK;
        eggContext.logger.info(ctx.body);
        Container.reset(eggContext[contextId]);
        next();
      } catch (err) {
        app.logger.error(err);
        throw err;
      }
    });
    await provider.listen();
    await consumer.listen();

    if (dubbo.swagger.enable) {
      app.dubbo.swagger = new SwaggerProvider(dubbo.swagger.name, provider, app.logger);
      await app.dubbo.swagger.publish();
      // const swaggerConsumer = new SwaggerConsumer(dubbo.swagger.name, registry);
      // await swaggerConsumer.get();
    }
  } catch (err) {
    app.logger.error(err);
  }
};

export const close = async (app: Application) => {
  const { consumer, swagger, provider } = app.dubbo;
  provider && provider.close();
  consumer && consumer.close();
  swagger && swagger.unPublish();
};
