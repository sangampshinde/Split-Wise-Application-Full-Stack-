import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';
import { ExpensesModule } from './expenses/expenses.module';
import { NotificationsModule } from './notifications/notifications.module';
import { CacheModule } from './cache/cache.module';

@Module({
  imports: [AuthModule, UsersModule, GroupsModule, ExpensesModule, NotificationsModule, CacheModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
