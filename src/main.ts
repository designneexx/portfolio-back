import { NestFactory } from '@nestjs/core';
import { createAppModuleFactory } from './app.module';
import { enviroments } from './enviroments';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import multipart from '@fastify/multipart';
import util from 'util';
import path from 'path';

async function bootstrap() {
  const DB_HOSTS = [enviroments.dbHostUrl];
  const url = util.format(
    enviroments.mongoUri,
    enviroments.dbUser,
    enviroments.dbPassword,
    DB_HOSTS.join(','),
  );
  const options = {
    tls: true,
    tlsCAFile: path.join(__dirname, 'CA.pem'),
    replicaSet: enviroments.dbRs,
    authSource: enviroments.dbName,
    dbName: enviroments.dbName,
  };
  const AppModule = createAppModuleFactory(url, options);

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.enableCors({ origin: /.+/ });
  app.useGlobalPipes(new ValidationPipe());
  app.register(multipart);
  await app.listen(enviroments.port, enviroments.host);
}
bootstrap();
