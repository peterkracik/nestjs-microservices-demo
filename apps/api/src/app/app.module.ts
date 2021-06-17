import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { clients } from '@shared';

@Module({
  imports: [
    ClientsModule.register(clients)
  ],
  controllers: [AppController],
})
export class AppModule {}
