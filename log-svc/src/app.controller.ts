import { Controller, Logger } from '@nestjs/common';
import {EventPattern} from '@nestjs/microservices';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name, true);

  @EventPattern('log.*')
  log(data: any)  {
    this.logger.debug('Log from microservice');
    this.logger.error(data);
  }
}
