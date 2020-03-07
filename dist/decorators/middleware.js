"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const namespace_1 = require("./namespace");
function Middleware(...args) {
    return (_target, _property, descriptor) => {
        const middlewares = Reflect.getMetadata(namespace_1.default.RPC_MIDDLEWARE, descriptor.value) || [];
        middlewares.unshift(...args);
        Reflect.defineMetadata(namespace_1.default.RPC_MIDDLEWARE, middlewares, descriptor.value);
    };
}
exports.Middleware = Middleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2RlY29yYXRvcnMvbWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUUxQiwyQ0FBb0M7QUFHcEMsU0FBZ0IsVUFBVSxDQUFDLEdBQUcsSUFBdUM7SUFDbkUsT0FBTyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEVBQUU7UUFDeEMsTUFBTSxXQUFXLEdBQ2YsT0FBTyxDQUFDLFdBQVcsQ0FBQyxtQkFBUyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hFLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM3QixPQUFPLENBQUMsY0FBYyxDQUFDLG1CQUFTLENBQUMsY0FBYyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEYsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQVBELGdDQU9DIn0=