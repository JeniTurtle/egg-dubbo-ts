import 'reflect-metadata';
import namespace from './namespace';

export function Description(str: string): ClassDecorator {
  return target => {
    Reflect.defineMetadata(namespace.RPC_DESCRIPTION, str, target);
  };
}
