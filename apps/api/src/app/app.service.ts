import { Injectable, OnModuleInit, Inject } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { Observable } from "rxjs";

@Injectable()
export class AppService { // implements OnModuleInit {
  // private postsService: PostsService;

  // constructor(
  //   @Inject('POSTS_PACKAGE') private client: ClientGrpc
  // ) {}

  // onModuleInit() {
  //   this.postsService = this.client.getService<PostsService>('PostsService');
  // }

  // getPost(): Observable<string> {
  //   return this.postsService.findOne({ id: 1 });
  // }
}
