import { Test, TestingModule } from '@nestjs/testing';
import { TelegramGroupService } from './telegram-group.service';

describe('TelegramGroupService', () => {
  let service: TelegramGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TelegramGroupService],
    }).compile();

    service = module.get<TelegramGroupService>(TelegramGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
