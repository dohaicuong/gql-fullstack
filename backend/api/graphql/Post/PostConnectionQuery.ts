import { extendType, inputObjectType } from 'nexus'
import { connectionFromArraySlice, cursorToOffset } from 'graphql-relay'
import { Post } from 'nexus-prisma'

export const PostConnectionWhere = inputObjectType({
  name: 'PostConnectionWhere',
  definition: t => {
    t.boolean('published')
  }
})
export const PostConnectionQuery = extendType({
  type: 'Query',
  definition: t => {
    t.nonNull.connectionField('posts', {
      type: Post.$name,
      additionalArgs: {
        where: PostConnectionWhere
      },
      resolve: async (_, { where, after, first }, { prisma }) => {
        const offset = after ? cursorToOffset(after) + 1 : 0
        if(isNaN(offset)) throw new Error('cursor is invalid')

        const filters = {
          published: where?.published ?? undefined,
        }

        const [totalCount, items] = await Promise.all([
          prisma.post.count({
            where: filters,
          }),
          prisma.post.findMany({
            where: filters,
            take: first,
            skip: offset,
          })
        ])

        return connectionFromArraySlice(
          items,
          { first, after },
          { sliceStart: offset, arrayLength: totalCount }
        )
      }
    })
  }
})
