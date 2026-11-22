import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { SpbuModule } from './spbu/spbu.module.js';
import { PrismaService } from './prisma/prisma.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
  ObserveModule.forRoot({
    appKey: process.env.OBSERVE_APP_KEY ?? 'YOUR_APP_KEY',
    appSecret: process.env.OBSERVE_APP_SECRET ?? 'YOUR_APP_SECRET',
    serviceId: 'gaspol-backend',
  }),
  PrismaModule,
  SpbuModule,
],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
