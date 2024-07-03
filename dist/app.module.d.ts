import { MongooseModuleOptions } from '@nestjs/mongoose';
export declare function createAppModuleFactory(mongoUri: string, options: MongooseModuleOptions): {
    new (): {};
};
