import { IsBoolean, IsEmpty, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUsersBotDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  botId: number;

  @IsBoolean()
  delFlag: boolean;

  @IsEmpty()
  groupId: number;
}
