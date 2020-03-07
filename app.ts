import 'reflect-metadata';
import { Application, IBoot } from 'egg';
import { close, start } from './lib/init';

export default class AppBoot implements IBoot {
  constructor(private app: Application) {}

  configWillLoad() {}

  async didLoad() {}

  async willReady() {}

  async didReady() {
    start(this.app);
    // @ts-ignore
    process.on('SIGINT', () => {
      close(this.app);
    });
  }

  async serverDidReady() {}

  async beforeClose() {
    close(this.app);
  }
}
