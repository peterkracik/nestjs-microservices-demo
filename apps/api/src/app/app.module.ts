import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { clients } from '@shared';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'POSTS_SERVICE',
        transport: Transport.TCP,
        options: {port: 3001}
      },
      {
        name: 'LOG_SERVICE',
        transport: Transport.TCP,
        options: {port: 3002}
      }
  ])
  ],
  controllers: [AppController],
})
export class AppModule {}
