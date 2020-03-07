"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const namespace_1 = require("./namespace");
function Response(fn) {
    return (_target, _property, descriptor) => {
        Reflect.defineMetadata(namespace_1.default.RPC_RESP, fn, descriptor.value);
    };
}
exports.Response = Response;
