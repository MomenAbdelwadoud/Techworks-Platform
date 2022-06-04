import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import InputLabel from "@mui/material/InputLabel";

import styles from "../styles/SignupPage.module.css";

export default function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let signup_data = { firstName, lastName, email, password };
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    console.log(signup_data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={require("../assets/TechWorks final design.png")}
          alt="Techworks Logo"
          className={styles.logo}
        />
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                autoComplete="first-name"
                name="firstName"
                required
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                autoComplete="last-name"
                name="lastName"
                required
                id="lastName"
                label="Last Name"
                autoFocus
                onChange={(event) => setLastName(event.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                required
                fullWidth
                label="Title"
                id="title"
                labelId="role-label"
                value={role}
                onChange={(event) => setRole(event.target.value)}
              >
                <MenuItem value={"participant"}>Participant</MenuItem>
                <MenuItem value={"admin"}>Admin</MenuItem>
                <MenuItem value={"programming"}>Programming Trainer</MenuItem>
                <MenuItem value={"data"}>Data Analytics Trainer</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}></Grid>*/}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mb: 2, mt: 3 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2" color="secondary.light">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
