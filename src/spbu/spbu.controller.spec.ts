import { Test, TestingModule } from '@nestjs/testing';
import { SpbuController } from './spbu.controller.js';
import { SpbuService } from './spbu.service.js';

describe('SpbuController', () => {
  let controller: SpbuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpbuController],
      providers: [SpbuService],
    }).compile();

    controller = module.get<SpbuController>(SpbuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
