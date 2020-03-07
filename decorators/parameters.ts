import 'reflect-metadata';
import namespace from './namespace';
import { ProviderServiceChunkMethodParametersSchema } from 'node-dubbo-ts';

export function Parameters(...args: ProviderServiceChunkMethodParametersSchema[]): MethodDecorator {
  return (_target, _property, descriptor) => {
    Reflect.defineMetadata(namespace.RPC_PARAMETERS, args, descriptor.value);
  };
}
