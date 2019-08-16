import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TokenController } from './modules/token/controllers/token.controller';
import { TokenModule } from './modules/token/token.module';

import { UsersController } from './modules/users/controllers/users.controller';
import { UsersModule } from './modules/users/users.module';

import { LoggerModule } from './modules/logger/logger.module';

@Module({
  imports: [LoggerModule, UsersModule, TokenModule],
  controllers: [AppController, UsersController, TokenController],
  providers: [AppService],
})
export class AppModule { }
