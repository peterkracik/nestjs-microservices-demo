import { Controller, Logger } from '@nestjs/common';
import {EventPattern, MessagePattern} from '@nestjs/microservices';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name, true);

  @MessagePattern('posts.get')
  async getPosts(data: any): Promise<Array<any>> {
    this.logger.debug('get posts call');

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

    return posts;
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(posts), 3000);
    // })
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
