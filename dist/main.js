"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const enviroments_1 = require("./enviroments");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const common_1 = require("@nestjs/common");
const multipart_1 = __importDefault(require("@fastify/multipart"));
const util_1 = __importDefault(require("util"));
const path_1 = __importDefault(require("path"));
async function bootstrap() {
    const DB_HOSTS = [enviroments_1.enviroments.dbHostUrl];
    const url = util_1.default.format(enviroments_1.enviroments.mongoUri, enviroments_1.enviroments.dbUser, enviroments_1.enviroments.dbPassword, DB_HOSTS.join(','));
    const options = {
        tls: true,
        tlsCAFile: path_1.default.join(process.cwd(), 'src', 'CA.pem'),
        replicaSet: enviroments_1.enviroments.dbRs,
        authSource: enviroments_1.enviroments.dbName,
        dbName: enviroments_1.enviroments.dbName,
    };
    console.log(url, options);
    const AppModule = (0, app_module_1.createAppModuleFactory)(url, options);
    const app = await core_1.NestFactory.create(AppModule, new platform_fastify_1.FastifyAdapter());
    app.enableCors({ origin: /.+/ });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.register(multipart_1.default);
    await app.listen(enviroments_1.enviroments.port);
}
bootstrap();
//# sourceMappingURL=main.js.map