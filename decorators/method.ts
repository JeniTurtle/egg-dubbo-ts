import 'reflect-metadata';
import * as lodash from 'lodash';
import * as is from 'is-type-of';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import namespace from './namespace';
import { ParamValidateError } from '../exception';

// @ts-ignore
export function Method(target, property, descriptor) {
  const originalMethod = descriptor.value;
  const paramTargets: any[] = Reflect.getMetadata(namespace.RPC_PARAM, target[property]) || [];
  const paramTypes = Reflect.getMetadata(namespace.PARAM_METADATA, target, property);
  const fn = descriptor.value;

  descriptor.value = async function() {
    const params: any[] = [].slice.call(arguments);
    const responseType = Reflect.getMetadata(namespace.RPC_RESP, fn);
    for (const paramIndex of paramTargets) {
      const type = paramTypes[paramIndex];
      const param = params[paramIndex];
      if (!is.class(type)) {
        if (type(params[paramIndex]) !== params[paramIndex]) {
          throw new ParamValidateError({
            msg: `第${paramIndex + 1}个参数(${param})的类型不是${type.name}类型`,
          });
        }
        continue;
      }
      const paramObj = plainToClass(type, param);
      const errors = await validate(paramObj, { skipMissingProperties: false });
      if (errors.length) {
        throw new ParamValidateError({ msg: lodash.values(errors[0].constraints)[0] });
      }
    }
    const ret = await originalMethod.apply(this, params);
    if (!responseType) {
      return ret;
    }
    if (is.function(responseType) && !is.class(responseType)) {
      if (responseType(ret) !== ret) {
        throw new ParamValidateError({
          msg: `返回结果类型不是${responseType.name}类型`,
        });
      }
    } else if (is.class(responseType)) {
      if (!is.object(ret)) {
        throw new ParamValidateError({
          msg: '返回结果类型不是对象类型',
        });
      }
      const respObj = plainToClass(responseType, ret);
      const errors = await validate(respObj, { skipMissingProperties: false });
      if (errors.length) {
        throw new ParamValidateError({ msg: lodash.values(errors[0].constraints)[0] });
      }
      return respObj;
    }
    return ret;
  };
  Reflect.defineMetadata(namespace.RPC_METHOD, true, descriptor.value);
  return descriptor;
}
