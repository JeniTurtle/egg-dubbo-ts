"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typedi_1 = require("typedi");
const node_dubbo_ts_1 = require("node-dubbo-ts");
const namespace_1 = require("../decorators/namespace");
const providerFactory_1 = require("./providerFactory");
const utils_1 = require("../utils");
const instance_1 = require("./instance");
exports.start = async (app) => {
    try {
        const { dubbo } = app.config;
        const registry = new node_dubbo_ts_1.Registry(Object.assign({}, dubbo.zookeeper));
        const provider = new node_dubbo_ts_1.Provider(Object.assign(Object.assign({}, dubbo.provider), { registry, pid: process.pid, logger: app.logger }));
        const consumer = new node_dubbo_ts_1.Consumer(Object.assign(Object.assign({}, dubbo.consumer), { registry, pid: process.pid }));
        app.dubbo = {
            consumer,
            provider,
        };
        await providerFactory_1.default(app);
        provider.on('data', async (ctx, chunk, next) => {
            try {
                const { method, interfaceName, requestId, interfaceVersion, parameters } = ctx.req;
                const eggContext = app.createAnonymousContext({
                    method: 'RPC',
                    url: `/__rpc/dubbo/${interfaceName}/${method}/${interfaceVersion}?requestId=${requestId}`,
                });
                const rpcSerivce = instance_1.getInstance(eggContext, chunk.interfacetarget);
                const property = rpcSerivce.constructor.prototype[method];
                const middlewares = dubbo.middlewares || [];
                const bindedMiddlewares = (Reflect.getMetadata(namespace_1.default.RPC_MIDDLEWARE, property) || []).slice(0);
                eggContext.rpcContext = ctx;
                bindedMiddlewares.push(async ({ rpcContext }) => {
                    const result = await rpcSerivce[method](...parameters);
                    rpcContext.body = result;
                });
                const composed = utils_1.compose(middlewares.concat(bindedMiddlewares));
                await composed(eggContext).catch(e => app.logger.error(e));
                eggContext.logger.info(ctx.body);
                typedi_1.Container.reset(eggContext[instance_1.contextId]);
                next();
            }
            catch (err) {
                app.logger.error(err);
                throw err;
            }
        });
        await provider.listen();
        await consumer.listen();
        if (dubbo.swagger.enable) {
            app.dubbo.swagger = new node_dubbo_ts_1.SwaggerProvider(dubbo.swagger.name, provider, app.logger);
            await app.dubbo.swagger.publish();
        }
    }
    catch (err) {
        app.logger.error(err);
    }
};
exports.close = async (app) => {
    const { consumer, swagger, provider } = app.dubbo;
    provider && provider.close();
    consumer && consumer.close();
    swagger && swagger.unPublish();
};
