import {ClientsModuleOptions, MicroserviceOptions, Transport} from '@nestjs/microservices';
import { join } from 'path';

// redis
const optionsRedis = {
  url: "redis://localhost:6379",
};

// nats
const optionsNats = {
  url: "nats://localhost:4222"
}

// gRPC
// const optionsGrpc = {
//   package: 'hero',
//   protoPath: join(__dirname, 'proto/post.proto'),
// };


export const options = optionsRedis;
export const transport = Transport.REDIS;


export const clients: ClientsModuleOptions = [
  {
    name: "LOG_SERVICE",
    transport: transport,
    options: options,
  },
  {
    name: "POSTS_SERVICE",
    transport: transport,
    options: options,
  },
];


