import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { UsersBotsService } from './users-bots.service';
import { CreateUsersBotDto } from './dto/create-users-bot.dto';
import { UpdateUsersBotDto } from './dto/update-users-bot.dto';

@Controller('users-bots')
export class UsersBotsController {
  constructor(private readonly usersBotsService: UsersBotsService) {}

  @Post()
  async create(@Res() res, @Body() createUsersBotDto: CreateUsersBotDto) {
    try {
      await this.usersBotsService.createOrUpdate(createUsersBotDto);
      return res.status(HttpStatus.OK).json({
        message: 'Success',
        status: 200,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: User not updated!',
        status: 400,
      });
    }
  }

  @Get()
  async findAll(@Res() res) {
    const userBots = await this.usersBotsService.findAll();
    return res.status(HttpStatus.OK).json({
      userBots: userBots,
      status: 200,
    });
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const userBot = await this.usersBotsService.findOne(+id);
    return res.status(HttpStatus.OK).json({
      userBot: userBot,
      status: 200,
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUsersBotDto: UpdateUsersBotDto,
  ) {
    return this.usersBotsService.update(+id, updateUsersBotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersBotsService.remove(+id);
  }
}
