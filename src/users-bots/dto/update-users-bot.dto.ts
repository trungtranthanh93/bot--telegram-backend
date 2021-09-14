import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersBotDto } from './create-users-bot.dto';

export class UpdateUsersBotDto extends PartialType(CreateUsersBotDto) {
    id: number;
}
