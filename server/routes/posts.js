const _ = require("lodash")
const postsRouter = require("express").Router()

const Collections = require("../collections")

const Logger = require("../utils/logger")

const Posts = new Collections.Posts()

postsRouter.get("/", async (req, res) => {
  const { query } = req.query

  const parsedQuery = _.isNil(query) ? query : JSON.parse(query)

  Logger.info("GET posts by query", query)

  try {
    const posts = await Posts.getPostsByQuery(parsedQuery)

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
  console.log(req.body)

  const { post } = req.body

  Logger.info("POST new post", post)

  try {
    const createdPost = await Posts.createNewPost(post)

    Logger.info(`Successfully created new post with _id ${createdPost._id}`, {
      createdPost,
    })

    res.json({ post: createdPost, done: true })
  } catch (error) {
    const errorMessage = "Failed creating new post"

    Logger.error(errorMessage, {
      post,
      error: error.message,
    })

    res.json({ msg: errorMessage, error: error.message, done: false })
  }
})

postsRouter.put("/:id", async (req, res) => {
  const { id } = req.params
  const { update } = req.body

  Logger.info(`PUT update post with _id ${req.params.id}`, {
    postId: id,
    update,
  })

  try {
    const updatedPost = await Posts.updatePostById(id, update)

    Logger.info(`Successfully updated post with _id ${updatedPost._id}`, {
      updatedPost,
    })

    res.json({ updatedPost, done: true })
  } catch (error) {
    const errorMessage = "Failed updating post"

    Logger.error(errorMessage, {
      update,
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

    res.json({ id, done: true })
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
