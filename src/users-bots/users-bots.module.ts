import { Module } from '@nestjs/common';
import { UsersBotsService } from './users-bots.service';
import { UsersBotsController } from './users-bots.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersBot } from './entities/users-bot.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersBot])
  ],
  controllers: [UsersBotsController],
  providers: [UsersBotsService]
})
export class UsersBotsModule {}
