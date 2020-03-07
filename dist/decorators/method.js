"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const lodash = require("lodash");
const is = require("is-type-of");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const namespace_1 = require("./namespace");
const exception_1 = require("../exception");
function Method(target, property, descriptor) {
    const originalMethod = descriptor.value;
    const paramTargets = Reflect.getMetadata(namespace_1.default.RPC_PARAM, target[property]) || [];
    const paramTypes = Reflect.getMetadata(namespace_1.default.PARAM_METADATA, target, property);
    const fn = descriptor.value;
    descriptor.value = async function () {
        const params = [].slice.call(arguments);
        const responseType = Reflect.getMetadata(namespace_1.default.RPC_RESP, fn);
        for (const paramIndex of paramTargets) {
            const type = paramTypes[paramIndex];
            const param = params[paramIndex];
            if (!is.class(type)) {
                if (type(params[paramIndex]) !== params[paramIndex]) {
                    throw new exception_1.ParamValidateError({
                        msg: `第${paramIndex + 1}个参数(${param})的类型不是${type.name}类型`,
                    });
                }
                continue;
            }
            const paramObj = class_transformer_1.plainToClass(type, param);
            const errors = await class_validator_1.validate(paramObj, { skipMissingProperties: false });
            if (errors.length) {
                throw new exception_1.ParamValidateError({ msg: lodash.values(errors[0].constraints)[0] });
            }
        }
        const ret = await originalMethod.apply(this, params);
        if (!responseType) {
            return ret;
        }
        if (is.function(responseType) && !is.class(responseType)) {
            if (responseType(ret) !== ret) {
                throw new exception_1.ParamValidateError({
                    msg: `返回结果类型不是${responseType.name}类型`,
                });
            }
        }
        else if (is.class(responseType)) {
            if (!is.object(ret)) {
                throw new exception_1.ParamValidateError({
                    msg: '返回结果类型不是对象类型',
                });
            }
            const respObj = class_transformer_1.plainToClass(responseType, ret);
            const errors = await class_validator_1.validate(respObj, { skipMissingProperties: false });
            if (errors.length) {
                throw new exception_1.ParamValidateError({ msg: lodash.values(errors[0].constraints)[0] });
            }
            return respObj;
        }
    };
    Reflect.defineMetadata(namespace_1.default.RPC_METHOD, true, descriptor.value);
    return descriptor;
}
exports.Method = Method;
