"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const namespace_1 = require("./namespace");
function Param(target, key, index) {
    const bodyParam = Reflect.getMetadata(namespace_1.default.RPC_PARAM, target[key]) || [];
    bodyParam.push(index);
    Reflect.defineMetadata(namespace_1.default.RPC_PARAM, bodyParam, target[key]);
}
exports.Param = Param;
