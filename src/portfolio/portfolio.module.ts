import { Module } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioController } from './portfolio.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Portfolio, PortfolioSchema } from './schemas/portfolio.schema';
import { MemoryStoredFile, NestjsFormDataModule } from 'nestjs-form-data';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { User, UserSchema } from 'src/users/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Portfolio.name, schema: PortfolioSchema },
      { name: User.name, schema: UserSchema },
    ]),
    NestjsFormDataModule.config({ storage: MemoryStoredFile }),
    UsersModule,
  ],
  providers: [PortfolioService, UsersService],
  controllers: [PortfolioController],
  exports: [PortfolioService, UsersService],
})
export class PortfolioModule {}
