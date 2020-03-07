"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidV1 = require("uuid/v1");
const typedi_1 = require("typedi");
typedi_1.Container.of = function (instanceId) {
    if (instanceId === undefined) {
        return this.globalInstance;
    }
    var container = this.instances.find(function (instance) {
        return instance.id === instanceId;
    });
    if (!container) {
        container = new typedi_1.ContainerInstance(instanceId);
        container.services.push(...this.globalInstance.services.map(s => (Object.assign(Object.assign({}, s), { value: s.global ? s.value : undefined }))));
        this.instances.push(container);
    }
    return container;
};
exports.contextId = 'RpcServiceContextId';
const initCtx = (target, ctx) => {
    target.ctx = ctx;
    target.app = ctx.app;
    target.config = ctx.app.config;
    target.service = ctx.service;
    target[exports.contextId] = ctx[exports.contextId];
};
const injectContext = (obj, ctx) => {
    Object.getOwnPropertyNames(obj).map(prop => {
        if (obj[prop] && typeof obj[prop] === 'object') {
            const type = obj[prop].constructor;
            if (obj[exports.contextId] !== ctx[exports.contextId] && (typedi_1.Container.has(type) || typedi_1.Container.has(type.name))) {
                initCtx(obj[prop], ctx);
                injectContext(obj[prop], ctx);
            }
        }
    });
};
exports.getInstance = (ctx, classType) => {
    ctx[exports.contextId] = uuidV1();
    const instance = typedi_1.Container.of(ctx[exports.contextId]).get(classType);
    injectContext(instance, ctx);
    initCtx(instance, ctx);
    return instance;
};
