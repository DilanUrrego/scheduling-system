import { Test, TestingModule } from '@nestjs/testing';
import { SecurityGuardsController } from './security-guards.controller';
import { SecurityGuardsService } from './security-guards.service';

describe('SecurityGuardsController', () => {
  let controller: SecurityGuardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecurityGuardsController],
      providers: [SecurityGuardsService],
    }).compile();

    controller = module.get<SecurityGuardsController>(SecurityGuardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
