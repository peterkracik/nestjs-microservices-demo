import { Controller, Logger } from '@nestjs/common';
import {EventPattern, MessagePattern} from '@nestjs/microservices';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name, true);

  @MessagePattern('posts.get')
  async getPosts(data: any): Promise<Array<any>> {
    this.logger.debug('get posts call');
    return [{
      name: "Post 1",
      test: "Lorem ipsum"
    }, {
      name: "Post 2",
      text: "Another lorem ipsum"
    }];
  }

  @EventPattern('posts.create')
  createPost(data: any) {
    this.logger.error('creating post');
    this.logger.debug(data);
  }
}