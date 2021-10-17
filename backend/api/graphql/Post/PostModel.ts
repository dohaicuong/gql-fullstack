import { objectType } from 'nexus'
import { Post } from 'nexus-prisma'

export const PostModel = objectType({
  name: Post.$name,
  definition: t => {
    t.implements('Node')
    t.field(Post.title)
    t.field(Post.body)
    t.field(Post.published)
  }
})
