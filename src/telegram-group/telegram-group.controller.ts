import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TelegramGroupService } from './telegram-group.service';
import { CreateTelegramGroupDto } from './dto/create-telegram-group.dto';
import { UpdateTelegramGroupDto } from './dto/update-telegram-group.dto';

@Controller('telegram-group')
export class TelegramGroupController {
  constructor(private readonly telegramGroupService: TelegramGroupService) {}

  @Post()
  create(@Body() createTelegramGroupDto: CreateTelegramGroupDto) {
    return this.telegramGroupService.create(createTelegramGroupDto);
  }

  @Get()
  findAll() {
    return this.telegramGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.telegramGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTelegramGroupDto: UpdateTelegramGroupDto) {
    return this.telegramGroupService.update(+id, updateTelegramGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.telegramGroupService.remove(+id);
  }
}
