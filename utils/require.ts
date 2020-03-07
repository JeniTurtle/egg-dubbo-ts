import * as path from 'path';

type EsModuleType<T = any> = {
  __esModule: true;
  default: T;
};

export function RequireDefault<T = any>(pather: string, cwd?: string) {
  const moduleExports = Require<EsModuleType<T>>(pather, cwd);
  return moduleExports.default;
}

export function Require<T = any>(pather: string, cwd?: string) {
  const moduleExports = path.isAbsolute(pather) ? require(pather) : require(path.resolve(cwd || process.cwd(), pather));
  return moduleExports as T;
}

export function RequireModule<T = any>(pather: string) {
  const moduleExports = require(pather);
  return moduleExports as T;
}

export function RequireModuleDefault<T = any>(pather: string) {
  const moduleExports = RequireModule<EsModuleType<T>>(pather);
  return moduleExports.default;
}
