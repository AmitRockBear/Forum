const Mongoose = require("mongoose")

const postSchema = new Mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 2,
    },
    content: {
      type: String,
      required: true,
      minlength: 4,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    comments: {
      type: [Mongoose.Schema.Types.ObjectId],
      default: [],
    },
  },
  { timestamps: true }
)

const Post = Mongoose.model("Post", postSchema)

module.exports = Post
