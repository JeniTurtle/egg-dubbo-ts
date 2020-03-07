import 'reflect-metadata';
import namespace from './namespace';

// @ts-ignore
export function Param(target, key, index) {
  const bodyParam = Reflect.getMetadata(namespace.RPC_PARAM, target[key]) || [];
  bodyParam.push(index);
  Reflect.defineMetadata(namespace.RPC_PARAM, bodyParam, target[key]);
}
