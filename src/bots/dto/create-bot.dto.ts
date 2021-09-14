import {
  IsString,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class CreateBotDto {
  @IsString()
  botName: string;
  @IsNumber()
  budget: number;
  @IsBoolean()
  isRunning: boolean;
  @IsNumber()
  sessionVolatility: number;
}
