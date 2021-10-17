import { extendType, inputObjectType, nonNull, objectType } from 'nexus'
import { Post } from 'nexus-prisma'

export const PostCreateInput = inputObjectType({
  name: 'PostCreateInput',
  definition: t => {
    t.nonNull.string('title')
    t.nonNull.string('body')
    t.nonNull.boolean('published')
  }
})
export const PostCreatePayload = objectType({
  name: 'PostCreatePayload',
  definition: t => {
    t.nonNull.field('post', { type: Post.$name })
  }
})
export const PostCreateMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.nonNull.field('postCreate', {
      args: { input: nonNull('PostCreateInput') },
      type: nonNull('PostCreatePayload'),
      resolve: async (_, { input }, { prisma }) => {
        const newPost = await prisma.post.create({ data: input })
        return { post: newPost }
      }
    })
  }
})
