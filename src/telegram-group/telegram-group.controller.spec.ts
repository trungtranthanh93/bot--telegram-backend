import { Test, TestingModule } from '@nestjs/testing';
import { TelegramGroupController } from './telegram-group.controller';
import { TelegramGroupService } from './telegram-group.service';

describe('TelegramGroupController', () => {
  let controller: TelegramGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TelegramGroupController],
      providers: [TelegramGroupService],
    }).compile();

    controller = module.get<TelegramGroupController>(TelegramGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
