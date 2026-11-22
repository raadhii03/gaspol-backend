import { Module } from '@nestjs/common';
import { SpbuService } from './spbu.service.js';
import { SpbuController } from './spbu.controller.js';

@Module({
  controllers: [SpbuController],
  providers: [SpbuService],
})
export class SpbuModule {}
