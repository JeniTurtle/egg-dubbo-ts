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
