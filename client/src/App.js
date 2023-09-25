import CssBaseline from "@material-ui/core/CssBaseline"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"

import { Home, CreatePost } from "./pages/index"

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
        <Home />
      </ThemeProvider>
    </div>
  )
}

export default App
