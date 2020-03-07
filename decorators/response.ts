import 'reflect-metadata';
import namespace from './namespace';

export function Response(fn: any): MethodDecorator {
  return (_target, _property, descriptor) => {
    Reflect.defineMetadata(namespace.RPC_RESP, fn, descriptor.value);
  };
}

// export function Response(schema: any) {
//   return (_target, _property, descriptor) => {
//     Reflect.defineMetadata(namespace.RPC_RESPONSE, schema, descriptor.value);
//   };
// }
