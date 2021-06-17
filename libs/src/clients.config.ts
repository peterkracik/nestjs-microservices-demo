import {ClientsModuleOptions, MicroserviceOptions, Transport} from '@nestjs/microservices';
import { join } from 'path';

// redis
const optionsTcp = {
  port: 3001
};

// redis
const optionsRedis = {
  url: "redis://localhost:6379",
  retryAttempts: 5,
  retryDelay: 5000
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


// TCP
export const postSvcOptions: MicroserviceOptions = {
  transport: Transport.TCP,
  options: { port: 3001 },
};
export const logSvcOptions: MicroserviceOptions = {
  transport: Transport.TCP,
  options: { port: 3002 },
};
