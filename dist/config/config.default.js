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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb25maWcvY29uZmlnLmRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxrQkFBZSxHQUFHLEVBQUU7SUFDbEIsTUFBTSxNQUFNLEdBQUcsRUFBZ0MsQ0FBQztJQUVoRCxNQUFNLENBQUMsS0FBSyxHQUFHO1FBQ2IsV0FBVyxFQUFFLEVBQUU7UUFDZixXQUFXLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsQ0FBQztRQUN2RyxPQUFPLEVBQUU7WUFDUCxNQUFNLEVBQUUsSUFBSTtZQUNaLElBQUksRUFBRSxhQUFhO1NBQ3BCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixjQUFjLEVBQUUsS0FBSztZQUNyQixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsV0FBVyxFQUFFLGlCQUFpQjtZQUM5QixhQUFhLEVBQUUsT0FBTztZQUN0QixJQUFJLEVBQUUsSUFBSTtZQUNWLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsV0FBVyxFQUFFLGlCQUFpQjtZQUM5QixhQUFhLEVBQUUsT0FBTztTQUN2QjtLQUNGLENBQUM7SUFDRixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUMifQ==