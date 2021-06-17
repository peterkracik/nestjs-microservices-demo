import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { options, postSvcOptions, transport } from '@shared';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    // postSvcOptions
    {
      transport: transport,
      options: options,
    }
  );
  app.listen(() => console.log('Posts Microservice is listening'));
}
bootstrap();
