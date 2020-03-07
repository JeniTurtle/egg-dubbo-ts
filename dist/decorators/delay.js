"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const namespace_1 = require("./namespace");
function Delay(time) {
    return target => {
        Reflect.defineMetadata(namespace_1.default.RPC_DELAY, time, target);
    };
}
exports.Delay = Delay;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9kZWNvcmF0b3JzL2RlbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEJBQTBCO0FBQzFCLDJDQUFvQztBQUVwQyxTQUFnQixLQUFLLENBQUMsSUFBWTtJQUNoQyxPQUFPLE1BQU0sQ0FBQyxFQUFFO1FBQ2QsT0FBTyxDQUFDLGNBQWMsQ0FBQyxtQkFBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUpELHNCQUlDIn0=