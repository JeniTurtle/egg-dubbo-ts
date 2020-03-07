"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const namespace_1 = require("./namespace");
function Retries(count) {
    return target => {
        Reflect.defineMetadata(namespace_1.default.RPC_RETRIES, count, target);
    };
}
exports.Retries = Retries;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2RlY29yYXRvcnMvcmV0cmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQiwyQ0FBb0M7QUFFcEMsU0FBZ0IsT0FBTyxDQUFDLEtBQWE7SUFDbkMsT0FBTyxNQUFNLENBQUMsRUFBRTtRQUNkLE9BQU8sQ0FBQyxjQUFjLENBQUMsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQztBQUNKLENBQUM7QUFKRCwwQkFJQyJ9