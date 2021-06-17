import { Controller, Inject, Logger } from '@nestjs/common';
import {ClientProxy, EventPattern, MessagePattern} from '@nestjs/microservices';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name, true);

  constructor(
    @Inject('LOG_SERVICE') private logClient: ClientProxy,
  ) {}

  @MessagePattern('posts.get')
  async getPosts(data: any): Promise<Array<any>> {
    this.logger.debug('get posts call');

    this.logClient.emit('log.debug', 'this is new log');
    const posts = [
      {
        name: 'Post 1',
        text: 'Lorem ipsum',
      },
      {
        name: 'Post 2',
        text: 'Another lorem ipsum',
      },
    ];

    // return posts;
    return new Promise((resolve) => {
      setTimeout(() => resolve(posts), 3000);
    });
  }

  @EventPattern('posts.create')
  createPost(data: any) {
    this.logger.error('creating post');
    this.logger.debug(data);
  }

  // @GrpcMethod('PostsService', 'FindOne')
  // findOne(
  //   data: Id,
  //   metadata: Metadata,
  //   call: ServerUnaryCall<any>
  // ) {
  //   const items = [
  //     { id: 1, name: 'John' },
  //     { id: 2, name: 'Doe' },
  //   ];
  //   return items.find(({ id }) => id === data.id);
  // }
}
