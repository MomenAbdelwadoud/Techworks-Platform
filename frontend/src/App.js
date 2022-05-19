import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffd41d",
      light: "#FFE600",
      veryLight: "#FFF06B",
      dark: "#F0CD38",
      veryDark: "#B4A200",
    },
    secondary: {
      main: "#252525",
      light: "#606060",
      black: "#000000",
      white: "#ffffff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
