import * as uuidV1 from 'uuid/v1';
import { Context } from 'egg';
import { Container, ContainerInstance } from 'typedi';

Container.of = function(instanceId) {
  if (instanceId === undefined) {
    // @ts-ignore
    return this.globalInstance;
  }
  // @ts-ignore
  var container = this.instances.find(function(instance) {
    return instance.id === instanceId;
  });
  if (!container) {
    container = new ContainerInstance(instanceId);
    // @ts-ignore
    container.services.push(
      // @ts-ignore
      ...this.globalInstance.services.map(s => ({
        ...s,
        value: s.global ? s.value : undefined,
      })),
    );
    // @ts-ignore
    this.instances.push(container);
  }
  return container;
};

export const contextId = 'RpcServiceContextId';

const initCtx = (target, ctx) => {
  target.ctx = ctx;
  target.app = ctx.app;
  target.config = ctx.app.config;
  target.service = ctx.service;
  target[contextId] = ctx[contextId];
};

const injectContext = (obj, ctx) => {
  Object.getOwnPropertyNames(obj).map(prop => {
    if (obj[prop] && typeof obj[prop] === 'object') {
      const type = obj[prop].constructor;
      if (obj[contextId] !== ctx[contextId] && (Container.has(type) || Container.has(type.name))) {
        initCtx(obj[prop], ctx);
        injectContext(obj[prop], ctx);
      }
    }
  });
};

export const getInstance = (ctx: Context, classType) => {
  ctx[contextId] = uuidV1();
  const instance = Container.of(ctx[contextId]).get<any>(classType);
  injectContext(instance, ctx);
  initCtx(instance, ctx);
  return instance;
};
