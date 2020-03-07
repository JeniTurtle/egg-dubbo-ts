"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseException_1 = require("./baseException");
class ParamValidateError extends baseException_1.BaseException {
    constructor() {
        super(...arguments);
        this.code = 200001;
        this.msg = '参数格式效验错误';
    }
}
exports.ParamValidateError = ParamValidateError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9leGNlcHRpb24vdmFsaWRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBZ0Q7QUFFaEQsTUFBYSxrQkFBbUIsU0FBUSw2QkFBYTtJQUFyRDs7UUFDVyxTQUFJLEdBQVcsTUFBTSxDQUFDO1FBQ3RCLFFBQUcsR0FBVyxVQUFVLENBQUM7SUFDcEMsQ0FBQztDQUFBO0FBSEQsZ0RBR0MifQ==