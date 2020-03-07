# egg-dubbo-ts

基于eggjs和node-dubbo-ts实现的一套egg dubbo插件。可以利用装饰器快速构建RPC接口，供消费端调用。

#### 安装步骤：
```
npm install egg-dubbo-ts
yarn add egg-dubbo
```

#### 配置方式：

修改eggjs项目中config/plugin.ts文件，开启egg-dubbo-ts插件。

```typescript
// 示例代码
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  dubbo: {
    enable: true,
    package: 'egg-dubbo-ts',
  },
};
export default plugin;
```

配置config/config.default.ts文件

```typescript
// 示例代码
config.dubbo = {
  middlewares: [responseHandler],
  serviceDirs: ['app/dubbo/service/**/*.ts', 'app/dubbo/service/**/*.js', '!app/dubbo/service/**/*.d.ts'],
  swagger: {
    enable: false,
  },
  zookeeper: {
    host: '127.0.0.1:2181',
    sessionTimeout: 30000,
    retries: 3,
  },
  provider: {
    application: 'SERVICE_1',
    dubbo_version: '1.0.0',
    port: 8998,
    heartbeat: 60000,
  },
  consumer: {
    application: 'SERVICE_2',
    dubbo_version: '1.0.0',
  },
};
```

```typescript
// 中间件示例代码
import { PROVIDER_CONTEXT_STATUS } from 'node-dubbo-ts';
import { SystemUnknownError } from '../exception';

export async function responseHandler(ctx, next) {
  try {
    await next();
    const { body } = ctx.rpcContext;
    ctx.rpcContext.body = { code: 200, data: body };
  } catch (err) {
    ctx.logger.error(err);
    const error = err.code ? err : new SystemUnknownError({ error: err.message });
    ctx.rpcContext.body = {
      message: error.message,
      code: error.code,
      error: error.error,
    };
  } finally {
    ctx.rpcContext.status = PROVIDER_CONTEXT_STATUS.OK;
  }
}
```

#### 定义rpc接口

```ts
// 示例代码
import { Service, Inject } from 'typedi';
import OAuthService from '@service/auth/oauth';
import { RPCService, Response, Provider, Version, Description, Method, Summary, Param } from 'egg-dubbo-ts';
import { OAuthTokenParams, OAuthTokenResp } from '../dto/oAuth';

@Service()
@Provider('com.jeni.node.service.OAuthService')
@Version('1.0.0')
@Description('第三方授权认证服务')
export default class OAuthRPCService extends RPCService {
  @Inject()
  readonly oAuthService: OAuthService;

  @Method
  @Summary('获取第三方授权Token')
  @Response(OAuthTokenResp)
  async getAccessToken(@Param params: OAuthTokenParams) {
    const { sign, appId, appSecret, school, timestamp } = params;
    const thirdApp = await this.oAuthService.validateOAuth({
      sign,
      appId,
      appSecret,
      school,
      timestamp,
    });
    const accessToken = this.app.jwt.sign(
      {
        appId,
        school,
      },
      {
        expiresIn: thirdApp.tokenExpireTime || 2 * 60 * 60, // 默认有效期2小时
      },
    );
    return {
      token: this.ctx.helper.crypto.encrypt(accessToken),
    };
  }
}
```

```ts
import { IsDefined } from 'class-validator';
import { Type } from 'class-transformer';

export class OAuthTokenParams {
  @IsDefined({ message: '学校不能为空' })
  @Type(() => Number)
  school: number;

  @IsDefined({ message: 'appId不能为空' })
  @Type(() => String)
  appId: string;

  @IsDefined({ message: 'appSecret不能为空' })
  @Type(() => String)
  appSecret: string;

  @IsDefined({ message: '签名不能为空' })
  @Type(() => String)
  sign: string;

  @IsDefined({ message: '时间戳不能为空' })
  @Type(() => Number)
  timestamp: number;
}

export class OAuthTokenResp {
  @IsDefined({ message: 'Token不能为空' })
  @Type(() => String)
  token: string;
}
```

#### 调用rpc接口

```ts
import * as java from 'js-to-java';
async getOAuthAccessToken(data: {
  school: number;
  appId: string;
  appSecret: string;
  sign: string;
  timestamp: number;
}) {
  const invoker = await this.app.dubbo.consumer.get('com.jeni.node.service.OAuthService', '1.0.0');
  return await invoker.invoke('getAccessToken', [java('com.java.Object', { ...data })]);
}
```
