import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersBotDto } from './dto/create-users-bot.dto';
import { UpdateUsersBotDto } from './dto/update-users-bot.dto';
import { UsersBot } from './entities/users-bot.entity';
import {getConnection} from "typeorm";
import { TelegramGroup } from 'src/telegram-group/entities/telegram-group.entity';


@Injectable()
export class UsersBotsService {
  constructor(
    @InjectRepository(UsersBot)
    private readonly userBotRepository: Repository<UsersBot>,
  ) {}
  async create(createUsersBotDto: CreateUsersBotDto) {
    try {
      console.log(createUsersBotDto)
      return await this.userBotRepository.save(createUsersBotDto);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    return await this.userBotRepository.find();
  }

  async findOne(userId: number) {
    return await this.userBotRepository.findOne({where: {userId: userId, delFlag: false}});
  }
  async findByUserIdAndBotId(userId: number, botId: number){
    return await this.userBotRepository.findOne({ where: { userId, botId} })
  }

  update(id: number, updateUsersBotDto: UpdateUsersBotDto) {
    return this.userBotRepository.update(id,updateUsersBotDto);
  }

  remove(id: number) {
    return `This action removes a #${id} usersBot`;
  }
  async deleteByUserId(userId: number){
    await getConnection()
    .createQueryBuilder()
    .update(UsersBot)
    .set({ delFlag: true})
    .where("user_id = :userId", {userId})
    .execute();
  }
  async getGroupIdByUserId(userId: number){
    return await getConnection().createQueryBuilder() 
    .select("telegram_group") 
    .from(TelegramGroup, "telegram_group") 
    .where("telegram_group.id = :userId", { userId}) .getOne();
  }
  async createOrUpdate(createUsersBotDto: CreateUsersBotDto) {
    const usersBot = await this.findByUserIdAndBotId(createUsersBotDto.userId,createUsersBotDto.botId);
    await this.deleteByUserId(createUsersBotDto.userId);
    const telegeramGroup : any =await this.getGroupIdByUserId(createUsersBotDto.userId);
    console.log(telegeramGroup);
    if(usersBot) {
      usersBot.delFlag = false;
      await this.update(usersBot.id, usersBot);
    } else {
      createUsersBotDto.groupId = telegeramGroup.id;
      await this.create(createUsersBotDto)
    }
  }
}
