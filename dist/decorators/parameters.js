"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const namespace_1 = require("./namespace");
function Parameters(...args) {
    return (_target, _property, descriptor) => {
        Reflect.defineMetadata(namespace_1.default.RPC_PARAMETERS, args, descriptor.value);
    };
}
exports.Parameters = Parameters;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2RlY29yYXRvcnMvcGFyYW1ldGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQiwyQ0FBb0M7QUFHcEMsU0FBZ0IsVUFBVSxDQUFDLEdBQUcsSUFBa0Q7SUFDOUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEVBQUU7UUFDeEMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxtQkFBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNFLENBQUMsQ0FBQztBQUNKLENBQUM7QUFKRCxnQ0FJQyJ9