"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    const config = {};
    config.dubbo = {
        middlewares: [],
        serviceDirs: ['app/dubbo/service/**/*.ts', 'app/dubbo/service/**/*.js', '!app/dubbo/service/**/*.d.ts'],
        swagger: {
            enable: true,
            name: 'Swagger接口文档',
        },
        zookeeper: {
            host: '127.0.0.1:2181',
            sessionTimeout: 30000,
            retries: 3,
        },
        provider: {
            application: 'ProviderProject',
            dubbo_version: '1.0.0',
            port: 8080,
            heartbeat: 60000,
        },
        consumer: {
            application: 'ConsumerProject',
            dubbo_version: '1.0.0',
        },
    };
    return config;
};
