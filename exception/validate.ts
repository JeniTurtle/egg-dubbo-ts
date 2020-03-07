import { BaseException } from './baseException';

export class ParamValidateError extends BaseException {
  readonly code: number = 200001;
  readonly msg: string = '参数格式效验错误';
}
