import 'reflect-metadata';
import namespace from './namespace';

export function Summary(str: string): MethodDecorator {
  return (_target, _property, descriptor) => {
    Reflect.defineMetadata(namespace.RPC_SUMMARY, str, descriptor.value);
  };
}
