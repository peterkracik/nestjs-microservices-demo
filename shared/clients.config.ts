import {ClientsModuleOptions, Transport} from '@nestjs/microservices';

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


export const options = optionsRedis;
export const transport = Transport.REDIS;


export const clients: ClientsModuleOptions = [
  {
    name: "LOG_SERVICE",
    transport: transport,
    options: options,
  },
  {
    name: "POST_SERVICE",
    transport: transport,
    options: options,
  },
];
