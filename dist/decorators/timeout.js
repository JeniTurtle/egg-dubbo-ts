"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const namespace_1 = require("./namespace");
function Timeout(time) {
    return target => {
        Reflect.defineMetadata(namespace_1.default.RPC_TIMEOUT, time, target);
    };
}
exports.Timeout = Timeout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZW91dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2RlY29yYXRvcnMvdGltZW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQiwyQ0FBb0M7QUFFcEMsU0FBZ0IsT0FBTyxDQUFDLElBQVk7SUFDbEMsT0FBTyxNQUFNLENBQUMsRUFBRTtRQUNkLE9BQU8sQ0FBQyxjQUFjLENBQUMsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlELENBQUMsQ0FBQztBQUNKLENBQUM7QUFKRCwwQkFJQyJ9