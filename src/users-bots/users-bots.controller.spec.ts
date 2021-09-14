import { Test, TestingModule } from '@nestjs/testing';
import { UsersBotsController } from './users-bots.controller';
import { UsersBotsService } from './users-bots.service';

describe('UsersBotsController', () => {
  let controller: UsersBotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersBotsController],
      providers: [UsersBotsService],
    }).compile();

    controller = module.get<UsersBotsController>(UsersBotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
