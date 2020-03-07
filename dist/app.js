"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const init_1 = require("./lib/init");
class AppBoot {
    constructor(app) {
        this.app = app;
    }
    configWillLoad() { }
    async didLoad() { }
    async willReady() { }
    async didReady() {
        init_1.start(this.app);
        process.on('SIGINT', () => {
            init_1.close(this.app);
        });
    }
    async serverDidReady() { }
    async beforeClose() {
        init_1.close(this.app);
    }
}
exports.default = AppBoot;
