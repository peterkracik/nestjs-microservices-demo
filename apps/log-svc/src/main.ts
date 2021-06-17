import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { logSvcOptions, options, transport } from '@shared';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    logSvcOptions
    // {
    //   transport: transport,
    //   options: options,
    // }
  );
  app.listen(() => console.log('Log Microservice is listening'));
}
bootstrap();
