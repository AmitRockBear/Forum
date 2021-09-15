import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "16px 0px",
    backgroundColor: theme.palette.primary.main,
    maxWidth: "70%",
  },
  title: {
    fontWeight: 500,
  },
}))

export default function Post(props) {
  const classes = useStyles()

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} variant="h6">
          {props.post.title}
        </Typography>
        <Typography color="textSecondary">ssssssssssss</Typography>
      </CardContent>
    </Card>
  )
}
