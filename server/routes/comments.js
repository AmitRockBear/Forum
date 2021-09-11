const commentsRouter = require("express").Router()

const Collections = require("../collections")

const Logger = require("../utils/logger")

const Comments = new Collections.Comments()

commentsRouter.get("/", async (req, res) => {
  const { query } = req.body

  Logger.info("GET comments by query", query)

  try {
    const comments = await Comments.getCommentsByQuery(query)

    Logger.info(`Successfully got ${comments.length} comments by query`, {
      query,
    })

    res.json({ comments, done: true })
  } catch (error) {
    const errorMessage = "Failed to get comments by query"

    Logger.error(errorMessage, {
      query,
      error: error.message,
    })

    res.json({ msg: errorMessage, error: error.message, done: false })
  }
})

commentsRouter.post("/", async (req, res) => {
  Logger.info("POST new comment", req.body)

  try {
    const comment = await Comments.createNewComment(req.body)

    Logger.info(`Successfully created new comment with _id ${comment._id}`, {
      comment,
    })

    res.json({ comment, done: true })
  } catch (error) {
    const errorMessage = "Failed creating new comment"

    Logger.error(errorMessage, {
      comment: req.body,
      error: error.message,
    })

    res.json({ msg: errorMessage, error: error.message, done: false })
  }
})

commentsRouter.delete("/:id", async (req, res) => {
  const { id } = req.params

  Logger.info(`DELETE comment with id ${req.params.id}`, {
    commentId: id,
  })

  try {
    const deletedComment = await Comments.deleteCommentById(id)

    Logger.info(`Successfully deleted comment with _id ${id}`, {
      deletedComment,
    })

    res.json({ done: true, id })
  } catch (error) {
    const errorMessage = `Failed deleting comment with _id ${id}`

    Logger.error(errorMessage, {
      commentId: id,
      error: error.message,
    })

    res.json({ msg: errorMessage, error: error.message, done: false })
  }
})

module.exports = commentsRouter
