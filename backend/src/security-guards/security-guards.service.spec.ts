import { Test, TestingModule } from '@nestjs/testing';
import { SecurityGuardsService } from './security-guards.service';

describe('SecurityGuardsService', () => {
  let service: SecurityGuardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecurityGuardsService],
    }).compile();

    service = module.get<SecurityGuardsService>(SecurityGuardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
