import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { enviroments } from './enviroments';
import { PortfolioModule } from './portfolio/portfolio.module';
import { MemoryStoredFile, NestjsFormDataModule } from 'nestjs-form-data';
import { MailerModule } from '@nestjs-modules/mailer';
import { getMailConfig } from './configs/main.config';

@Module({
  imports: [
    NestjsFormDataModule.config({ storage: MemoryStoredFile }),
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(enviroments.mongoUri),
    UsersModule,
    AuthModule,
    PortfolioModule,
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMailConfig,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
