import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { enviroments } from './enviroments';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import multipart from '@fastify/multipart';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.register(multipart);
  await app.listen(enviroments.port);
}
bootstrap();
