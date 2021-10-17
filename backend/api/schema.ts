import { connectionPlugin, makeSchema } from 'nexus'
import { join } from 'path'
import NexusPrismaScalars from 'nexus-prisma/scalars'
import * as types from './graphql'

export const schema = makeSchema({
  types: {
    NexusPrismaScalars,
    ...types
  },
  plugins: [
    connectionPlugin({
      disableBackwardPagination: true,
      strictArgs: true,
      nonNullDefaults: { output: true },
    })
  ],
  contextType: {
    module: join(__dirname, 'context', 'index.ts'),
    export: 'Context'
  },
  outputs: {
    typegen: join(__dirname, '..', 'nexus-typegen.ts'),
    schema: join(__dirname, '..', 'schema.graphql'),
  },
})
