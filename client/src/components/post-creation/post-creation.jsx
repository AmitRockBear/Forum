import React, { useEffect, useState } from "react"
import { useFormFields } from "../../hooks/index"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Typography } from "@material-ui/core"
import clsx from "clsx"

import Apis from "../../services/index.js"

const { createPost } = Apis.Api.Posts

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#001242",
    display: "flex",
    flexDirection: "column",
    margin: "16px auto",
  },
  text: {
    color: theme.palette.text.secondary,
  },
  marginTopAndbottom: { margin: "16px 0" },
}))

export default function PostCreation() {
  const classes = useStyles()

  const [fields, setFields] = useFormFields({ title: "", content: "" })

  const handlePostCreation = () => createPost(fields)

  return (
    <React.Fragment>
      <Container maxWidth="md" className={classes.root}>
        <Typography
          className={clsx(classes.text, classes.marginTopAndbottom)}
          variant="h5"
          component="div"
        >
          Create New Post
        </Typography>
        <TextField
          className={clsx(classes.text, classes.marginTopAndbottom)}
          id="title"
          label="Title"
          variant="filled"
          autoComplete="off"
          onChange={setFields}
        />
        <TextField
          className={clsx(classes.text, classes.marginTopAndbottom)}
          id="content"
          label="Content"
          variant="filled"
          color="primary"
          autoComplete="off"
          multiline
          rows={4}
          onChange={setFields}
        />
        <Button
          className={classes.marginTopAndbottom}
          color="secondary"
          variant="text"
          onClick={handlePostCreation}
        >
          Submit
        </Button>
      </Container>
    </React.Fragment>
  )
}
