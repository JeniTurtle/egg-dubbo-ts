import 'reflect-metadata';
import { Application, IBoot } from 'egg';
export default class AppBoot implements IBoot {
    private app;
    constructor(app: Application);
    configWillLoad(): void;
    didLoad(): Promise<void>;
    willReady(): Promise<void>;
    didReady(): Promise<void>;
    serverDidReady(): Promise<void>;
    beforeClose(): Promise<void>;
}
