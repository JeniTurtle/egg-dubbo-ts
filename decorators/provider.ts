import 'reflect-metadata';
import namespace from './namespace';

export function Provider(name: string): ClassDecorator {
  return target => {
    Reflect.defineMetadata(namespace.RPC_INTERFACE, name, target);
  };
}
