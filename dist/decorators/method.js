"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const lodash = require("lodash");
const is = require("is-type-of");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const namespace_1 = require("./namespace");
const exception_1 = require("../exception");
function Method(target, property, descriptor) {
    const originalMethod = descriptor.value;
    const paramTargets = Reflect.getMetadata(namespace_1.default.RPC_PARAM, target[property]) || [];
    const paramTypes = Reflect.getMetadata(namespace_1.default.PARAM_METADATA, target, property);
    const fn = descriptor.value;
    descriptor.value = async function () {
        const params = [].slice.call(arguments);
        const responseType = Reflect.getMetadata(namespace_1.default.RPC_RESP, fn);
        for (const paramIndex of paramTargets) {
            const type = paramTypes[paramIndex];
            const param = params[paramIndex];
            if (!is.class(type)) {
                if (type(params[paramIndex]) !== params[paramIndex]) {
                    throw new exception_1.ParamValidateError({
                        msg: `第${paramIndex + 1}个参数(${param})的类型不是${type.name}类型`,
                    });
                }
                continue;
            }
            const paramObj = class_transformer_1.plainToClass(type, param);
            const errors = await class_validator_1.validate(paramObj, { skipMissingProperties: false });
            if (errors.length) {
                throw new exception_1.ParamValidateError({ msg: lodash.values(errors[0].constraints)[0] });
            }
        }
        const ret = await originalMethod.apply(this, params);
        if (!responseType) {
            return ret;
        }
        if (is.function(responseType) && !is.class(responseType)) {
            if (responseType(ret) !== ret) {
                throw new exception_1.ParamValidateError({
                    msg: `返回结果类型不是${responseType.name}类型`,
                });
            }
        }
        else if (is.class(responseType)) {
            if (!is.object(ret)) {
                throw new exception_1.ParamValidateError({
                    msg: '返回结果类型不是对象类型',
                });
            }
            const respObj = class_transformer_1.plainToClass(responseType, ret);
            const errors = await class_validator_1.validate(respObj, { skipMissingProperties: false });
            if (errors.length) {
                throw new exception_1.ParamValidateError({ msg: lodash.values(errors[0].constraints)[0] });
            }
            return respObj;
        }
    };
    Reflect.defineMetadata(namespace_1.default.RPC_METHOD, true, descriptor.value);
    return descriptor;
}
exports.Method = Method;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0aG9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZGVjb3JhdG9ycy9tZXRob2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0QkFBMEI7QUFDMUIsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyx5REFBaUQ7QUFDakQscURBQTJDO0FBQzNDLDJDQUFvQztBQUNwQyw0Q0FBa0Q7QUFHbEQsU0FBZ0IsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVTtJQUNqRCxNQUFNLGNBQWMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ3hDLE1BQU0sWUFBWSxHQUFVLE9BQU8sQ0FBQyxXQUFXLENBQUMsbUJBQVMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdGLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsbUJBQVMsQ0FBQyxjQUFjLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25GLE1BQU0sRUFBRSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFFNUIsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ3RCLE1BQU0sTUFBTSxHQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsbUJBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakUsS0FBSyxNQUFNLFVBQVUsSUFBSSxZQUFZLEVBQUU7WUFDckMsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUNuRCxNQUFNLElBQUksOEJBQWtCLENBQUM7d0JBQzNCLEdBQUcsRUFBRSxJQUFJLFVBQVUsR0FBRyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksQ0FBQyxJQUFJLElBQUk7cUJBQzFELENBQUMsQ0FBQztpQkFDSjtnQkFDRCxTQUFTO2FBQ1Y7WUFDRCxNQUFNLFFBQVEsR0FBRyxnQ0FBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzQyxNQUFNLE1BQU0sR0FBRyxNQUFNLDBCQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUMxRSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pCLE1BQU0sSUFBSSw4QkFBa0IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDaEY7U0FDRjtRQUNELE1BQU0sR0FBRyxHQUFHLE1BQU0sY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNqQixPQUFPLEdBQUcsQ0FBQztTQUNaO1FBQ0QsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN4RCxJQUFJLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQzdCLE1BQU0sSUFBSSw4QkFBa0IsQ0FBQztvQkFDM0IsR0FBRyxFQUFFLFdBQVcsWUFBWSxDQUFDLElBQUksSUFBSTtpQkFDdEMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjthQUFNLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbkIsTUFBTSxJQUFJLDhCQUFrQixDQUFDO29CQUMzQixHQUFHLEVBQUUsY0FBYztpQkFDcEIsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxNQUFNLE9BQU8sR0FBRyxnQ0FBWSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNoRCxNQUFNLE1BQU0sR0FBRyxNQUFNLDBCQUFRLENBQUMsT0FBTyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN6RSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pCLE1BQU0sSUFBSSw4QkFBa0IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDaEY7WUFDRCxPQUFPLE9BQU8sQ0FBQztTQUNoQjtJQUNILENBQUMsQ0FBQztJQUNGLE9BQU8sQ0FBQyxjQUFjLENBQUMsbUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyRSxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDO0FBcERELHdCQW9EQyJ9