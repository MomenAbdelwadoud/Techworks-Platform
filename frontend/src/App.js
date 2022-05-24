import "./styles/App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CardPage from "./pages/CardPage";
import MaillistPage from "./pages/MaillistPage";
import QrcodePage from "./pages/QrcodePage";
import SchedulePage from "./pages/SchedulePage";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

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
  const logged_in = false;
  // get current pathname
  let current_path = window.location.pathname;
  // If user not logged in redirect to login page

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* if current path is not signup or login show navbar and sidebar */}
        {current_path !== "/signup" && current_path !== "/signin" && (
          <>
            <NavBar /> <SideBar />
          </>
        )}
        <Router>
          <Routes>
            {/* Route to each page file */}
            <Route
              path="/"
              element={
                logged_in ? (
                  <Navigate to="/participants" replace />
                ) : (
                  <Navigate to="/signin" replace />
                )
              }
              exact
            ></Route>
            <Route path="/signin" element={<LoginPage></LoginPage>}></Route>
            <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
            <Route path="/participants" element={<CardPage></CardPage>}></Route>
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
      </ThemeProvider>
    </div>
  );
}

export default App;
