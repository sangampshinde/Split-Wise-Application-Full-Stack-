import { Module, CacheModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisConfig } from 'src/config/redis.config';
import { CacheService } from './cache.service';

   @Module({
     imports: [
       CacheModule.registerAsync({
         imports: [ConfigModule],
         useFactory: async (configService: ConfigService) => ({
           isGlobal: true,
           ...redisConfig(configService),
         }),
         inject: [ConfigService],
       }),
     ],
     providers: [CacheService],
     exports: [CacheService],
   })
   export class CacheCustomModule {}