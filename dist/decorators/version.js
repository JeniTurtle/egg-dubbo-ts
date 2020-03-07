"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const namespace_1 = require("./namespace");
function Version(version) {
    return target => {
        Reflect.defineMetadata(namespace_1.default.RPC_VERSION, version, target);
    };
}
exports.Version = Version;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2RlY29yYXRvcnMvdmVyc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQiwyQ0FBb0M7QUFFcEMsU0FBZ0IsT0FBTyxDQUFDLE9BQWU7SUFDckMsT0FBTyxNQUFNLENBQUMsRUFBRTtRQUNkLE9BQU8sQ0FBQyxjQUFjLENBQUMsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLENBQUMsQ0FBQztBQUNKLENBQUM7QUFKRCwwQkFJQyJ9