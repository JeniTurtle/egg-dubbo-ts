"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const namespace_1 = require("./namespace");
function Provider(name) {
    return target => {
        Reflect.defineMetadata(namespace_1.default.RPC_INTERFACE, name, target);
    };
}
exports.Provider = Provider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9kZWNvcmF0b3JzL3Byb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEJBQTBCO0FBQzFCLDJDQUFvQztBQUVwQyxTQUFnQixRQUFRLENBQUMsSUFBWTtJQUNuQyxPQUFPLE1BQU0sQ0FBQyxFQUFFO1FBQ2QsT0FBTyxDQUFDLGNBQWMsQ0FBQyxtQkFBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUpELDRCQUlDIn0=