import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"

import { Home, CreatePost } from "../../pages/index"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
  title: {
    flexGrow: 1,
    color: theme.palette.secondary.main,
  },
}))

export default function Navbar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Forum
            </Typography>
            <Button color="secondary">Create Post</Button>
            <Button color="secondary">Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
