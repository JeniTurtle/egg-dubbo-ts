import 'reflect-metadata';
import { Context } from 'egg';
import { ComposeMiddleware } from '../utils';
export declare function Middleware(...args: Array<ComposeMiddleware<Context>>): MethodDecorator;
