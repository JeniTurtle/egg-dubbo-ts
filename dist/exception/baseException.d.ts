export declare class Exception extends Error {
    readonly code: number;
    readonly error: string | null;
    set msg(msg: string);
    constructor({ code, msg, error, }?: {
        code?: number;
        msg?: string;
        error?: string;
    });
}
export declare abstract class BaseException extends Exception {
    abstract readonly code: number;
    abstract readonly msg: string;
}
