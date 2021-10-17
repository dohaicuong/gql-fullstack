import { extendType } from 'nexus'
import { connectionFromArraySlice, cursorToOffset } from 'graphql-relay'
import { Comment } from 'nexus-prisma'

export const CommentConnectionPostExtend = extendType({
  type: 'Post',
  definition: t => {
    t.nonNull.connectionField('comments', {
      type: Comment.$name,
      resolve: async (_, { after, first }, { prisma }) => {
        const offset = after ? cursorToOffset(after) + 1 : 0
        if(isNaN(offset)) throw new Error('cursor is invalid')

        const [totalCount, items] = await Promise.all([
          prisma.comment.count(),
          prisma.comment.findMany({
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
