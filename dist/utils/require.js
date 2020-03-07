"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
function RequireDefault(pather, cwd) {
    const moduleExports = Require(pather, cwd);
    return moduleExports.default;
}
exports.RequireDefault = RequireDefault;
function Require(pather, cwd) {
    const moduleExports = path.isAbsolute(pather) ? require(pather) : require(path.resolve(cwd || process.cwd(), pather));
    return moduleExports;
}
exports.Require = Require;
function RequireModule(pather) {
    const moduleExports = require(pather);
    return moduleExports;
}
exports.RequireModule = RequireModule;
function RequireModuleDefault(pather) {
    const moduleExports = RequireModule(pather);
    return moduleExports.default;
}
exports.RequireModuleDefault = RequireModuleDefault;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3V0aWxzL3JlcXVpcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBNkI7QUFPN0IsU0FBZ0IsY0FBYyxDQUFVLE1BQWMsRUFBRSxHQUFZO0lBQ2xFLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBa0IsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzVELE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUMvQixDQUFDO0FBSEQsd0NBR0M7QUFFRCxTQUFnQixPQUFPLENBQVUsTUFBYyxFQUFFLEdBQVk7SUFDM0QsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdEgsT0FBTyxhQUFrQixDQUFDO0FBQzVCLENBQUM7QUFIRCwwQkFHQztBQUVELFNBQWdCLGFBQWEsQ0FBVSxNQUFjO0lBQ25ELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxPQUFPLGFBQWtCLENBQUM7QUFDNUIsQ0FBQztBQUhELHNDQUdDO0FBRUQsU0FBZ0Isb0JBQW9CLENBQVUsTUFBYztJQUMxRCxNQUFNLGFBQWEsR0FBRyxhQUFhLENBQWtCLE1BQU0sQ0FBQyxDQUFDO0lBQzdELE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUMvQixDQUFDO0FBSEQsb0RBR0MifQ==