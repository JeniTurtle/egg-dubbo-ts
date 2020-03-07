import { BaseException } from './baseException';
export declare class ParamValidateError extends BaseException {
    readonly code: number;
    readonly msg: string;
}
