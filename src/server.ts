import Fastify from "fastify"
import cors from "@fastify/cors"
import jwt from "@fastify/jwt"

import { poolRoutes } from "./routes/pool"
import { authRoutes } from "./routes/auth"
import { gameRoutes } from "./routes/game"
import { guessRoutes } from "./routes/guess"
import { userRoutes } from "./routes/user"

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(cors, {
    origin: true,
  })

  // Em produção isso precisa ser uma viarável de ambiente
  if (process.env.SECRET) {
    await fastify.register(jwt, {
      secret: process.env.SECRET,
    })
  } else {
    throw new Error()
  }

  await fastify.register(poolRoutes)
  await fastify.register(authRoutes)
  await fastify.register(gameRoutes)
  await fastify.register(guessRoutes)
  await fastify.register(userRoutes)

  const port = Number(process.env.PORT) || 3333

  await fastify.listen({ port: port, host: '0.0.0.0' })
}

bootstrap()
