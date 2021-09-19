import React, { useEffect, useState } from "react"
import Container from "@material-ui/core/Container"
import { Alert, AlertTitle } from "@material-ui/lab"
import Pagination from "@material-ui/lab/Pagination"

import Post from "./post.jsx"
import CenteredLoading from "../centeredLoading/centered-loading.jsx"

import Apis from "../../services/index.js"

const { getPosts } = Apis.Api.Posts

const PAGINATION_INTERVALS = 5

const _filterPostsAccordingToPagination = (
  posts,
  paginationCount,
  paginationIntervals
) => {
  if (posts.length > paginationCount * paginationIntervals)
    return posts.slice(
      (paginationCount - 1) * paginationIntervals,
      paginationCount * paginationIntervals
    )

  return posts.slice((paginationCount - 1) * paginationIntervals)
}

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [paginationCount, setPaginationCount] = useState(1)

  const paginationLength = Math.ceil(posts.length / PAGINATION_INTERVALS)

  let filteredPosts = _filterPostsAccordingToPagination(
    posts,
    paginationCount,
    PAGINATION_INTERVALS
  )

  const handlePaginationChange = (e, value) => {
    setPaginationCount(value)
    console.log(filteredPosts)
    filteredPosts = _filterPostsAccordingToPagination(
      posts,
      paginationCount,
      PAGINATION_INTERVALS
    )
  }

  useEffect(async () => {
    const apiPosts = await getPosts()

    setLoading(false)

    if (apiPosts.hasOwnProperty("error")) setError(apiPosts)
    else setPosts(apiPosts)
  }, [])

  console.log(filteredPosts)
  console.log(paginationCount)

  return (
    <React.Fragment>
      <Container maxWidth="md" style={{ marginTop: "16px" }}>
        <div style={{ width: "75%" }}>
          <div style={{ height: "75vh" }}>
            {loading ? (
              <CenteredLoading />
            ) : error ? (
              <Alert severity="error">
                <AlertTitle>Error - {error.msg}</AlertTitle>
                {error.error}
              </Alert>
            ) : (
              <>
                {filteredPosts.map((post) => (
                  <Post key={post._id} post={post} />
                ))}
              </>
            )}
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              style={{ margin: "auto" }}
              count={paginationLength}
              color="secondary"
              onChange={handlePaginationChange}
            />
          </div>
        </div>
      </Container>
    </React.Fragment>
  )
}
