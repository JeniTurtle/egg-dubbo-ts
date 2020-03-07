"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const namespace_1 = require("./namespace");
function Provider(name) {
    return target => {
        Reflect.defineMetadata(namespace_1.default.RPC_INTERFACE, name, target);
    };
}
exports.Provider = Provider;
