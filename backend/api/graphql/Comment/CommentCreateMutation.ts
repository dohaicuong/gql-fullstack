import { extendType, inputObjectType, nonNull, objectType } from 'nexus'
import { Comment } from 'nexus-prisma'

export const CommentCreateInput = inputObjectType({
  name: 'CommentCreateInput',
  definition: t => {
    t.nonNull.string('content')
    t.nonNull.relayId('postId')
  }
})
export const CommentCreatePayload = objectType({
  name: 'CommentCreatePayload',
  definition: t => {
    t.nonNull.field('comment', { type: Comment.$name })
  }
})
export const CommentCreateMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.nonNull.field('commentCreate', {
      args: { input: nonNull('CommentCreateInput') },
      type: nonNull('CommentCreatePayload'),
      resolve: async (_, { input }, { prisma }) => {
        const newComment = await prisma.comment.create({ data: input })
        return { comment: newComment }
      }
    })
  }
})
