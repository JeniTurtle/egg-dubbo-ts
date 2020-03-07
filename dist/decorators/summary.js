"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const namespace_1 = require("./namespace");
function Summary(str) {
    return (_target, _property, descriptor) => {
        Reflect.defineMetadata(namespace_1.default.RPC_SUMMARY, str, descriptor.value);
    };
}
exports.Summary = Summary;
