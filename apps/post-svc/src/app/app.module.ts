import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { clients } from '@shared';
import { AppController } from './app.controller';

@Module({
  imports: [ClientsModule.register(clients)],
  controllers: [AppController],
})
export class AppModule {}
