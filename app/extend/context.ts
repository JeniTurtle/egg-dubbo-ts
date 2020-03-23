import { Context } from 'egg';
import { ProviderContext } from 'node-dubbo-ts';

export default {
  get rpcContext(this: Context): ProviderContext {
    return this.state.rpcContext;
  },

  set rpcContext(this: Context, ctx: ProviderContext) {
    this.state.rpcContext = ctx;
  }
}