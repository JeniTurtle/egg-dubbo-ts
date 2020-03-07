export declare type ComposeNextCallback = () => Promise<any>;
export declare type ComposeMiddleware<T> = (ctx: T, next: ComposeNextCallback) => any;
export declare type ComposedMiddleware<T> = (ctx: T, next?: ComposeNextCallback) => Promise<void>;
export function compose<T>(middleware: ComposeMiddleware<T>[]): ComposedMiddleware<T>;

export function compose<T>(middleware: ComposeMiddleware<T>[]): ComposedMiddleware<T> {
  if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!');
  for (const fn of middleware) {
    if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!');
  }

  return (ctx: T, next?: ComposeNextCallback) => {
    let index = -1;
    return dispatch(0);
    function dispatch(i: number) {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'));
      index = i;
      let fn: any = middleware[i];
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}
