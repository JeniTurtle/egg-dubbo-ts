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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9kZWNvcmF0b3JzL3BhcmFtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEJBQTBCO0FBQzFCLDJDQUFvQztBQUdwQyxTQUFnQixLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLO0lBQ3RDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsbUJBQVMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlFLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsT0FBTyxDQUFDLGNBQWMsQ0FBQyxtQkFBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdEUsQ0FBQztBQUpELHNCQUlDIn0=