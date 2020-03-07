export declare type ComposeNextCallback = () => Promise<any>;
export declare type ComposeMiddleware<T> = (ctx: T, next: ComposeNextCallback) => any;
export declare type ComposedMiddleware<T> = (ctx: T, next?: ComposeNextCallback) => Promise<void>;
export declare function compose<T>(middleware: ComposeMiddleware<T>[]): ComposedMiddleware<T>;
