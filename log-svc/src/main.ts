import { NestFactory } from '@nestjs/core';
import {MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { options, transport } from '@shared';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: transport,
      options: options
    },
  );
  app.listen(() => console.log('Log Microservice is listening'));
}
bootstrap();
