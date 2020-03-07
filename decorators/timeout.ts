import 'reflect-metadata';
import namespace from './namespace';

export function Timeout(time: number): ClassDecorator {
  return target => {
    Reflect.defineMetadata(namespace.RPC_TIMEOUT, time, target);
  };
}
