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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9kZWNvcmF0b3JzL3Jlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEJBQTBCO0FBQzFCLDJDQUFvQztBQUVwQyxTQUFnQixRQUFRLENBQUMsRUFBTztJQUM5QixPQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsRUFBRTtRQUN4QyxPQUFPLENBQUMsY0FBYyxDQUFDLG1CQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUpELDRCQUlDIn0=