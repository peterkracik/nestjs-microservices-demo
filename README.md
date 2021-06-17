

# Microsvc demo

docs: [https://docs.nestjs.com/microservices/basics]

### start
`yarn install`

api: `nx serve api`
post service: `nx serve post-svc`
log service: `nx serve log-svc`
video service: `nx serve video-svc`

redis/nats: `docker-compose up`

### endpoints
`GET localhost:3000/posts`
`POST localhost:3000/posts` (anything as a body)
`GET localhost:3000/video`