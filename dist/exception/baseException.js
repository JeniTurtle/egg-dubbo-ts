"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exception extends Error {
    constructor({ code, msg, error, } = {}) {
        super(msg);
        this.error = null;
        code && (this.code = code);
        error && (this.error = error);
    }
    set msg(msg) {
        if (!this.message) {
            this.message = msg;
        }
    }
}
exports.Exception = Exception;
class BaseException extends Exception {
}
exports.BaseException = BaseException;
