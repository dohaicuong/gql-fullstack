import Fastify from 'fastify'
export const server = Fastify()

import cors from 'fastify-cors'
server.register(cors)

import mercurius from 'mercurius'
import { schema } from './schema'
import { context } from './context'
server.register(mercurius, {
  schema,
  graphiql: true,
  context,
})
