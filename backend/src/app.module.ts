import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import {  AppCacheModule  } from './cache/appcache.module';

@Module({
  imports: [DatabaseModule, AppCacheModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
