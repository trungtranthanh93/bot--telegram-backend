import { Test, TestingModule } from '@nestjs/testing';
import { UsersBotsService } from './users-bots.service';

describe('UsersBotsService', () => {
  let service: UsersBotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersBotsService],
    }).compile();

    service = module.get<UsersBotsService>(UsersBotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
