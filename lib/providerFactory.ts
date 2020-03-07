import 'reflect-metadata';
import * as path from 'path';
import * as globby from 'globby';
import { Application } from 'egg';
import namespace from '../decorators/namespace';
import { RequireDefault } from '../utils';
import { ProviderServiceChunkMethodParametersOptions, ProviderServiceChunkMethodParametersSchema } from 'node-dubbo-ts';

export default async function addProviderService(app: Application) {
  const files = await globby(app.config.dubbo.serviceDirs || [], { cwd: app.baseDir });
  files.forEach((file: string) => {
    file = path.resolve(app.baseDir, file);
    const service = RequireDefault(file);
    const interfacename = Reflect.getMetadata(namespace.RPC_INTERFACE, service);
    const version = Reflect.getMetadata(namespace.RPC_VERSION, service);
    const group = Reflect.getMetadata(namespace.RPC_GROUP, service);
    const deplay = Reflect.getMetadata(namespace.RPC_DELAY, service);
    const retries = Reflect.getMetadata(namespace.RPC_RETRIES, service);
    const timeout = Reflect.getMetadata(namespace.RPC_TIMEOUT, service);
    const description = Reflect.getMetadata(namespace.RPC_DESCRIPTION, service);
    if (interfacename) {
      const ServiceProperties = Object.getOwnPropertyNames(service.prototype);
      const methods: string[] = [],
        parameters: ProviderServiceChunkMethodParametersOptions[] = [];
      for (let i = 0; i < ServiceProperties.length; i++) {
        const property = ServiceProperties[i];
        const target = service.prototype[property];
        if (property === 'constructor') continue;
        const isMethod = Reflect.getMetadata(namespace.RPC_METHOD, target);
        const _parameters: ProviderServiceChunkMethodParametersSchema[] = Reflect.getMetadata(
          namespace.RPC_PARAMETERS,
          target,
        );
        const _response = Reflect.getMetadata(namespace.RPC_RESPONSE, target);
        const _summary = Reflect.getMetadata(namespace.RPC_SUMMARY, target);
        if (isMethod) {
          methods.push(property);
          const tmp: ProviderServiceChunkMethodParametersOptions = {
            name: property,
            input: [],
          };
          if (_response) tmp.output = _response;
          if (_summary) tmp.summary = _summary;
          if (_parameters) tmp.input = _parameters;
          parameters.push(tmp);
        }
      }
      app.dubbo.provider.addService(service, {
        interface: interfacename,
        revision: version || '0.0.0',
        version: version || '0.0.0',
        group: group,
        methods: methods,
        delay: deplay || -1,
        retries: retries || 2,
        timeout: timeout || 60000,
        description,
        parameters: parameters,
      });
    }
  });
}
