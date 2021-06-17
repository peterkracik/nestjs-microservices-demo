import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { logSvcOptions, options, transport } from '@shared';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    // logSvcOptions
    {
      transport: Transport.TCP,
      options: { port: 3002 },
    }
  );
  app.listen(() => console.log('Log Microservice is listening'));
}
bootstrap();
