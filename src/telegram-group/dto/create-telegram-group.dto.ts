import {
    IsString,
    IsNumber,
    IsBoolean,
  } from 'class-validator';
export class CreateTelegramGroupDto {
    @IsString()
    groupId: string;
    
    @IsString()
    groupName: string;

    @IsNumber()
    user: number;
        
}
