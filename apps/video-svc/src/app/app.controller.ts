import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';


@Controller()
export class AppController {
  constructor() {}

  @MessagePattern('video.get')
  getData() {
    return 'hello world'
  }
}
