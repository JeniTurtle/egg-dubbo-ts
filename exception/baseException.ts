export class Exception extends Error {
  public readonly code: number;
  public readonly error: string | null = null;

  set msg(msg: string) {
    if (!this.message) {
      this.message = msg;
    }
  }

  constructor({
    code,
    msg,
    error,
  }: {
    code?: number;
    msg?: string;
    error?: string;
  } = {}) {
    super(msg);
    code && (this.code = code);
    error && (this.error = error);
  }
}

export abstract class BaseException extends Exception {
  abstract readonly code: number;
  abstract readonly msg: string;
}
