import { Context, Application, EggAppConfig } from 'egg';
export declare abstract class RPCService {
    protected ctx: Context;
    protected app: Application;
    protected config: EggAppConfig;
    init(ctx: Context): this;
}
