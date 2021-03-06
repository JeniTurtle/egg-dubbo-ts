import 'reflect-metadata';
import namespace from './namespace';

export function Delay(time: number): ClassDecorator {
  return target => {
    Reflect.defineMetadata(namespace.RPC_DELAY, time, target);
  };
}
