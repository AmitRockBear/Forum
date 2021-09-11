const postsRouter = require("express").Router()

const Collections = require("../collections")

const Logger = require("../utils/logger")

const Posts = new Collections.Posts()

postsRouter.get("/", async (req, res) => {
  const { query } = req.body

  Logger.info("GET posts by query", query)

  try {
    const posts = await Posts.getPostsByQuery(query)

    Logger.info(`Successfully got ${posts.length} posts by query`, { query })

    res.json({ posts, done: true })
  } catch (error) {
    const errorMessage = "Failed to get posts by query"

    Logger.error(errorMessage, {
      query,
      error: error.message,
    })

    res.json({ msg: errorMessage, error: error.message, done: false })
  }
})

postsRouter.post("/", async (req, res) => {
  Logger.info("POST new post", req.body)

  try {
    const post = await Posts.createNewPost(req.body)

    Logger.info(`Successfully created new post with _id ${post._id}`, { post })

    res.json({ post, done: true })
  } catch (error) {
    const errorMessage = "Failed creating new post"

    Logger.error(errorMessage, {
      post: req.body,
      error: error.message,
    })

    res.json({ msg: errorMessage, error: error.message, done: false })
  }
})

postsRouter.put("/:id", async (req, res) => {
  const { id } = req.params

  Logger.info(`PUT update post with _id ${req.params.id}`, {
    postId: id,
    update: req.body,
  })

  try {
    const updatedPost = await Posts.updatePostById(id, req.body)

    Logger.info(`Successfully updated post with _id ${updatedPost._id}`, {
      updatedPost,
    })

    res.json({ updatedPost, done: true })
  } catch (error) {
    const errorMessage = "Failed updating post"

    Logger.error(errorMessage, {
      update: req.body,
      error: error.message,
    })

    res.json({ msg: errorMessage, error: error.message, done: false })
  }
})

postsRouter.delete("/:id", async (req, res) => {
  const { id } = req.params

  Logger.info(`DELETE post with id ${req.params.id}`, {
    postId: id,
  })

  try {
    const deletedPost = await Posts.deletePostById(id)

    Logger.info(`Successfully deleted post with _id ${id}`, {
      deletedPost,
    })

    res.json({ done: true, id })
  } catch (error) {
    const errorMessage = `Failed deleting post with _id ${id}`

    Logger.error(errorMessage, {
      postId: id,
      error: error.message,
    })

    res.json({ msg: errorMessage, error: error.message, done: false })
  }
})

module.exports = postsRouter
