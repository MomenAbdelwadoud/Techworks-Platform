import "./styles/App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useContext } from "react";
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
import AttendancePage from "./pages/AttendancePage";
import SchedulePage from "./pages/SchedulePage";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

import ContextWrapper from "./context/UserContext";
import { UserContext } from "./context/UserContext";
import ScheduleContextWrapper from "./context/ScheduleContext";
import ParticipantsContextWrapper from "./context/ParticipantsContext";

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
  const User = useContext(UserContext);
  const logged_in = User.signedIn;
  // get current pathname
  let current_path = window.location.pathname;
  // If user not logged in redirect to login page

  return (
    <ContextWrapper>
      <ScheduleContextWrapper>
        <ParticipantsContextWrapper>
          <div className="App">
            <ThemeProvider theme={theme}>
              {/* if current path is not signup or login show navbar and sidebar */}
              {current_path !== "/signup" &&
                current_path !== "/signin" &&
                current_path !== "/" && (
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
                        <Navigate to="/participants" />
                      ) : (
                        <Navigate to="/signin" />
                      )
                    }
                    exact
                  ></Route>
                  <Route
                    path="/signin"
                    element={<LoginPage></LoginPage>}
                  ></Route>
                  <Route
                    path="/signup"
                    element={<SignupPage></SignupPage>}
                  ></Route>
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
                    element={<AttendancePage></AttendancePage>}
                  ></Route>
                  <Route
                    path="/schedule"
                    element={<SchedulePage></SchedulePage>}
                  ></Route>
                  <Route
                    path="/emailing"
                    element={<MaillistPage></MaillistPage>}
                  ></Route>
                </Routes>
              </Router>
            </ThemeProvider>
          </div>
        </ParticipantsContextWrapper>
      </ScheduleContextWrapper>
    </ContextWrapper>
  );
}

export default App;
