"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RPCService {
    init(ctx) {
        this.ctx = ctx;
        this.app = ctx.app;
        this.config = ctx.app.config;
        return this;
    }
}
exports.RPCService = RPCService;
