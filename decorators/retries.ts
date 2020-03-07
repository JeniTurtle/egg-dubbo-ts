import 'reflect-metadata';
import namespace from './namespace';

export function Retries(count: number): ClassDecorator {
  return target => {
    Reflect.defineMetadata(namespace.RPC_RETRIES, count, target);
  };
}
