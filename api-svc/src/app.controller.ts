import { Body, Controller, Get, Inject, Logger, Post } from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name, true);

  constructor(
    @Inject('LOG_SERVICE') private logClient: ClientProxy,
    @Inject('POSTS_SERVICE') private postsClient: ClientProxy,
  ) {}

  @Get('posts')
  async getPosts(): Promise<Array<any>> {
    this.logger.debug('get post');
    this.logClient.emit('log.debug', 'API: get posts');
    const posts = await this.postsClient.send('posts.get', {}).toPromise();
    return posts;
  }

  @Post('posts')
  cratePost(
    @Body() post: any
  ): void {
    this.logger.debug('create post');
    this.logClient.emit('log.debug', 'API: create post');
    this.postsClient.emit('posts.create', post);
    this.logger.debug(post);
  }
}
