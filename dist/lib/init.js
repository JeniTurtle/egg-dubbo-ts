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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEJBQTBCO0FBRTFCLG1DQUFtQztBQUNuQyxpREFBOEc7QUFDOUcsdURBQWdEO0FBQ2hELHVEQUFtRDtBQUNuRCxvQ0FBc0Q7QUFDdEQseUNBQW9EO0FBRXZDLFFBQUEsS0FBSyxHQUFHLEtBQUssRUFBRSxHQUFnQixFQUFFLEVBQUU7SUFDOUMsSUFBSTtRQUNGLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzdCLE1BQU0sUUFBUSxHQUFHLElBQUksd0JBQVEsbUJBQ3hCLEtBQUssQ0FBQyxTQUFTLEVBQ2xCLENBQUM7UUFDSCxNQUFNLFFBQVEsR0FBRyxJQUFJLHdCQUFRLGlDQUN4QixLQUFLLENBQUMsUUFBUSxLQUNqQixRQUFRLEVBQ1IsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQ2hCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxJQUNsQixDQUFDO1FBQ0gsTUFBTSxRQUFRLEdBQUcsSUFBSSx3QkFBUSxpQ0FDeEIsS0FBSyxDQUFDLFFBQVEsS0FDakIsUUFBUSxFQUNSLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxJQUNoQixDQUFDO1FBQ0gsR0FBRyxDQUFDLEtBQUssR0FBRztZQUNWLFFBQVE7WUFDUixRQUFRO1NBQ1QsQ0FBQztRQUNGLE1BQU0seUJBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQW9CLEVBQUUsS0FBb0IsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUM3RSxJQUFJO2dCQUNGLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO2dCQUVuRixNQUFNLFVB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