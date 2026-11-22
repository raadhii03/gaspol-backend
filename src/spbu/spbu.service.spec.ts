import { Test, TestingModule } from '@nestjs/testing';
import { SpbuService } from './spbu.service.js';

describe('SpbuService', () => {
  let service: SpbuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpbuService],
    }).compile();

    service = module.get<SpbuService>(SpbuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
