import { Module } from '@nestjs/common';
import { TelegramGroupService } from './telegram-group.service';
import { TelegramGroupController } from './telegram-group.controller';

@Module({
  controllers: [TelegramGroupController],
  providers: [TelegramGroupService]
})
export class TelegramGroupModule {}
