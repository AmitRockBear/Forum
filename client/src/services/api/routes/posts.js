import Axios from "axios"

import { createErrorObject } from "../helpers/errorHandler"

const getPosts = async (query) => {
  const res = await Axios.get("api/posts", { params: { query } })

  if (!res.data.done) return createErrorObject(res.data)

  return res.data.posts
}

const createPost = async (post) => {
  const res = await Axios.post("api/posts", { post: post })
  console.log(res.data)
  if (!res.data.done) return createErrorObject(res.data)

  return res.data.post
}

const updatePostById = async (id, update) => {
  const res = await Axios.put(`api/posts/${id}`, update)

  if (!res.data.done) return createErrorObject(res.data)

  return res.data.updatedPost
}

const deletePostById = async (id) => {
  const res = await Axios.delete(`api/posts/${id}`)

  if (!res.data.done) return createErrorObject(res.data)

  return res.data.updatedPost
}

export default { getPosts, createPost, updatePostById, deletePostById }
