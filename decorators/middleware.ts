import 'reflect-metadata';
import { Context } from 'egg';
import namespace from './namespace';
import { ComposeMiddleware } from '../utils';

export function Middleware(...args: Array<ComposeMiddleware<Context>>): MethodDecorator {
  return (_target, _property, descriptor) => {
    const middlewares: Array<ComposeMiddleware<Context>> =
      Reflect.getMetadata(namespace.RPC_MIDDLEWARE, descriptor.value) || [];
    middlewares.unshift(...args);
    Reflect.defineMetadata(namespace.RPC_MIDDLEWARE, middlewares, descriptor.value);
  };
}
