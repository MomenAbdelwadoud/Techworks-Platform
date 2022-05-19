import logo from "./logo.svg";
import "./styles/App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CardPage from "./pages/CardPage";
import MaillistPage from "./pages/MaillistPage";
import QrcodePage from "./pages/QrcodePage";
import SchedulePage from "./pages/SchedulePage";

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
  let logged_in = true;
  // If user not logged in redirect to login page
  let home_page = (logged_in) => {
    if (logged_in) {
      return <CardPage></CardPage>;
    } else {
      return <LoginPage></LoginPage>;
    }
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
        <SideBar></SideBar>
        <main>
          <Router>
            <Routes>
              {/* Route to each page file */}
              <Route path="/" element={home_page(logged_in)} exact></Route>
              <Route path="/login" element={<LoginPage></LoginPage>}></Route>
              <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
              <Route
                path="/participants"
                element={<CardPage></CardPage>}
              ></Route>
              <Route
                path="/maillist"
                element={<MaillistPage></MaillistPage>}
              ></Route>
              <Route
                path="/attendance"
                element={<QrcodePage></QrcodePage>}
              ></Route>
              <Route
                path="/schedule"
                element={<SchedulePage></SchedulePage>}
              ></Route>
            </Routes>
          </Router>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
