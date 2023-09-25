const Mongoose = require("mongoose")

const commentSchema = new Mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      minlength: 4,
    },
    postId: {
      type: Mongoose.Schema.Types.ObjectId,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
)

const Comment = Mongoose.model("Comment", commentSchema)

module.exports = Comment
