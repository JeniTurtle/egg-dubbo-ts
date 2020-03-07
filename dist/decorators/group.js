"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const namespace_1 = require("./namespace");
function Group(group) {
    return target => {
        Reflect.defineMetadata(namespace_1.default.RPC_GROUP, group, target);
    };
}
exports.Group = Group;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9kZWNvcmF0b3JzL2dyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEJBQTBCO0FBQzFCLDJDQUFvQztBQUVwQyxTQUFnQixLQUFLLENBQUMsS0FBYTtJQUNqQyxPQUFPLE1BQU0sQ0FBQyxFQUFFO1FBQ2QsT0FBTyxDQUFDLGNBQWMsQ0FBQyxtQkFBUyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDN0QsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUpELHNCQUlDIn0=