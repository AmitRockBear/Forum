import CssBaseline from "@material-ui/core/CssBaseline"

import Navbar from "./components/navbar/index"

import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import Posts from "./components/posts"

const theme = createTheme({
  palette: {
    text: {
      primary: "#9381FF",
      secondary: "#FBF5F3",
    },
    background: {
      default: "#000022",
    },
    primary: {
      main: "#001242",
    },
    secondary: {
      main: "#9381FF",
    },
  },
})

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Posts />
      </ThemeProvider>
    </div>
  )
}

export default App
