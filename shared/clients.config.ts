import {ClientsModuleOptions, Transport} from '@nestjs/microservices';

const transport = Transport.REDIS;
const options = {
  url: "redis://localhost:6379",
  retryAttempts: 5,
  retryDelay: 5000
};

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
