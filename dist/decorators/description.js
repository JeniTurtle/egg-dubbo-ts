"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const namespace_1 = require("./namespace");
function Description(str) {
    return target => {
        Reflect.defineMetadata(namespace_1.default.RPC_DESCRIPTION, str, target);
    };
}
exports.Description = Description;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzY3JpcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9kZWNvcmF0b3JzL2Rlc2NyaXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEJBQTBCO0FBQzFCLDJDQUFvQztBQUVwQyxTQUFnQixXQUFXLENBQUMsR0FBVztJQUNyQyxPQUFPLE1BQU0sQ0FBQyxFQUFFO1FBQ2QsT0FBTyxDQUFDLGNBQWMsQ0FBQyxtQkFBUyxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakUsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUpELGtDQUlDIn0=