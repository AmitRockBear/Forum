const Comment = require("../models/comment")
const PostsCollection = require("./post")

class Comments {
  constructor() {
    this.model = Comment
  }

  async getCommentsByQuery(query) {
    return await this.model.find(query)
  }

  async createNewComment(comment) {
    const commentInstance = new this.model(comment)

    const createdComment = await commentInstance.save()

    try {
      await PostsCollection.addCommentToPost(comment.postId, createdComment._id)
    } catch (error) {
      await this.deleteCommentById(createdComment._id)
      throw error
    }

    return createdComment
  }

  async updateCommentById(id, update) {
    if (update.hasOwnProperty("_id"))
      throw { message: "Field _id cannot be updated" }

    const updatedComment = await this.model.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
    })

    return updatedComment
  }

  async deleteCommentById(id) {
    return await this.model.findByIdAndDelete(id)
  }
}

module.exports = Comments
