const Mongoose = require("mongoose")

const Post = require("../models/post")

class Posts {
  constructor() {
    this.model = Post
  }

  async getPostsByQuery(query) {
    return await this.model.find(query)
  }

  async createNewPost(post) {
    const postInstance = new this.model(post)

    const createdPost = await postInstance.save()
    return createdPost
  }

  async updatePostById(id, update) {
    if (update.hasOwnProperty("_id"))
      throw { message: "Field _id cannot be updated" }

    const updatedPost = await this.model.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
    })

    return updatedPost
  }

  async deletePostById(id) {
    return await this.model.findByIdAndDelete(id)
  }

  async addCommentToPost(postId, commentId) {
    return await this.model.findByIdAndUpdate(postId, {
      $push: { comments: Mongoose.Types.ObjectId(commentId) },
    })
  }
}

module.exports = Posts
