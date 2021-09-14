import { Injectable } from '@nestjs/common';
import { CreateTelegramGroupDto } from './dto/create-telegram-group.dto';
import { UpdateTelegramGroupDto } from './dto/update-telegram-group.dto';

@Injectable()
export class TelegramGroupService {
  create(createTelegramGroupDto: CreateTelegramGroupDto) {
    return 'This action adds a new telegramGroup';
  }

  findAll() {
    return `This action returns all telegramGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} telegramGroup`;
  }

  update(id: number, updateTelegramGroupDto: UpdateTelegramGroupDto) {
    return `This action updates a #${id} telegramGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} telegramGroup`;
  }
}
