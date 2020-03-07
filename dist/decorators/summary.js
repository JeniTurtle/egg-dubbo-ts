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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2RlY29yYXRvcnMvc3VtbWFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQiwyQ0FBb0M7QUFFcEMsU0FBZ0IsT0FBTyxDQUFDLEdBQVc7SUFDakMsT0FBTyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEVBQUU7UUFDeEMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZFLENBQUMsQ0FBQztBQUNKLENBQUM7QUFKRCwwQkFJQyJ9