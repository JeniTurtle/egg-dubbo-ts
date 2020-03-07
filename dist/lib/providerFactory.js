"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const path = require("path");
const globby = require("globby");
const namespace_1 = require("../decorators/namespace");
const utils_1 = require("../utils");
async function addProviderService(app) {
    const files = await globby(app.config.dubbo.serviceDirs || [], { cwd: app.baseDir });
    files.forEach((file) => {
        file = path.resolve(app.baseDir, file);
        const service = utils_1.RequireDefault(file);
        const interfacename = Reflect.getMetadata(namespace_1.default.RPC_INTERFACE, service);
        const version = Reflect.getMetadata(namespace_1.default.RPC_VERSION, service);
        const group = Reflect.getMetadata(namespace_1.default.RPC_GROUP, service);
        const deplay = Reflect.getMetadata(namespace_1.default.RPC_DELAY, service);
        const retries = Reflect.getMetadata(namespace_1.default.RPC_RETRIES, service);
        const timeout = Reflect.getMetadata(namespace_1.default.RPC_TIMEOUT, service);
        const description = Reflect.getMetadata(namespace_1.default.RPC_DESCRIPTION, service);
        if (interfacename) {
            const ServiceProperties = Object.getOwnPropertyNames(service.prototype);
            const methods = [], parameters = [];
            for (let i = 0; i < ServiceProperties.length; i++) {
                const property = ServiceProperties[i];
                const target = service.prototype[property];
                if (property === 'constructor')
                    continue;
                const isMethod = Reflect.getMetadata(namespace_1.default.RPC_METHOD, target);
                const _parameters = Reflect.getMetadata(namespace_1.default.RPC_PARAMETERS, target);
                const _response = Reflect.getMetadata(namespace_1.default.RPC_RESPONSE, target);
                const _summary = Reflect.getMetadata(namespace_1.default.RPC_SUMMARY, target);
                if (isMethod) {
                    methods.push(property);
                    const tmp = {
                        name: property,
                        input: [],
                    };
                    if (_response)
                        tmp.output = _response;
                    if (_summary)
                        tmp.summary = _summary;
                    if (_parameters)
                        tmp.input = _parameters;
                    parameters.push(tmp);
                }
            }
            app.dubbo.provider.addService(service, {
                interface: interfacename,
                revision: version || '0.0.0',
                version: version || '0.0.0',
                group: group,
                methods: methods,
                delay: deplay || -1,
                retries: retries || 2,
                timeout: timeout || 60000,
                description,
                parameters: parameters,
            });
        }
    });
}
exports.default = addProviderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXJGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3Byb3ZpZGVyRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQiw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBRWpDLHVEQUFnRDtBQUNoRCxvQ0FBMEM7QUFHM0IsS0FBSyxVQUFVLGtCQUFrQixDQUFDLEdBQWdCO0lBQy9ELE1BQU0sS0FBSyxHQUFHLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDckYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFO1FBQzdCLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsTUFBTSxPQUFPLEdBQUcsc0JBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLG1CQUFTLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVFLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEUsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxtQkFBUyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLG1CQUFTLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENB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