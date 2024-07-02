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
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.register(multipart_1.default);
    await app.listen(enviroments_1.enviroments.port);
}
bootstrap();
//# sourceMappingURL=main.js.map