import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "16px 0px",
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    fontWeight: 500,
  },
}))

const _sliceContent = (content) => {
  if (content.length < 40) return content
  return content.slice(0, 39) + ".."
}

export default function Post(props) {
  const classes = useStyles()

  const { title, content } = props.post

  const slicedContent = _sliceContent(content)

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} variant="h6">
          {title}
        </Typography>
        <Typography color="textSecondary">{slicedContent}</Typography>
      </CardContent>
    </Card>
  )
}
