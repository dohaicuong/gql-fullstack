import { objectType } from 'nexus'
import { Comment } from 'nexus-prisma'

export const CommentModel = objectType({
  name: Comment.$name,
  definition: t => {
    t.implements('Node')
    t.field(Comment.content)
    t.field(Comment.post)
  }
})
