import { SwaggerProvider, Provider, Consumer } from 'node-dubbo-ts';

declare module 'egg' {
  interface Application {
    dubbo: {
      swagger?: SwaggerProvider;
      provider?: Provider;
      consumer?: Consumer;
    };
  }
}
