import { Module } from '@nestjs/common';
import {ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { clients } from '../../shared';

@Module({
  imports: [
    ClientsModule.register(clients)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
