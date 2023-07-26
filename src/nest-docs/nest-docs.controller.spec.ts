import { Test, TestingModule } from '@nestjs/testing';
import { NestDocsController } from './nest-docs.controller';

describe('NestDocsController', () => {
  let controller: NestDocsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NestDocsController],
    }).compile();

    controller = module.get<NestDocsController>(NestDocsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
