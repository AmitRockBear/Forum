import React from "react"
import Container from "@material-ui/core/Container"

import Post from "./post"

export default function Posts() {
  return (
    <React.Fragment>
      <Container maxWidth="md" style={{ height: "85vh" }}>
        <Post post={{ title: "banananana", content: "lorem" }} />
        <Post post={{ title: "banananana", content: "lorem" }} />
        <Post post={{ title: "banananana", content: "lorem" }} />
        <Post post={{ title: "banananana", content: "lorem" }} />
        <Post post={{ title: "banananana", content: "lorem" }} />
      </Container>
    </React.Fragment>
  )
}
