import { PartialType } from '@nestjs/mapped-types';
import { CreateTelegramGroupDto } from './create-telegram-group.dto';

export class UpdateTelegramGroupDto extends PartialType(CreateTelegramGroupDto) {}
