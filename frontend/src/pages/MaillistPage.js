import React, { useState } from "react";
import Title from "../components/Title";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";

import styles from "../styles/MaillistPage.module.css";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

import emailjs from "@emailjs/browser";

export default function MaillistPage() {
  const [ok, setOk] = useState(false);
  const [error, setError] = useState(false);
  const [recipients, setRecipients] = useState("students");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleChange = (e) => {
    setRecipients(e.target.value);
  };
  // All emails
  const students = [
    "momenwadoudg@gmail.com",
    "ahmed.mohammed5139@gmail.com",
    "gamareithar@gmail.com",
    "altayeblubna@gmail.com",
    "malaz011236@gmail.com",
    "musab.al.khatim@gmail.com",
    "dr.mo@live.com",
    "najlaahassabelnabi@gmail.com",
    "razaz.elsadig@gmail.com",
    "mamoun.rwan@gmail.com",
    "tawfeegkabbashi95@gmail.com",
    "waadabdullah54@gmail.com",
    "elmahdiyasmin@gmail.com",
    "samahelnourali@gmail.com",
    "mmekonen52@gmail.com",
    "sebirghirmai86@gmail.com",
    "mayadaabuagla@gmail.com",
    "nsmaaalgam6@gmail.com",
    "sweetsusosam@gmail.com",
    "hamdi.zaherali@gmail.com",
    "nihal91@yahoo.com",
    "setaytilahun97@gmail.com",
  ];
  const mentors = [
    "willyalsenose@gmail.com",
    "alaa.khalid@savannah.sd",
    "sarahzar3@gmail.com",
  ];
  const all = students.concat(mentors);

  // show alert for 2 seconds
  const showOk = () => {
    setOk(true);
    setTimeout(() => {
      setOk(false);
    }, 2000);
  };
  const showError = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 2000);
  };

  const onSend = () => {
    const recipients_list =
      recipients === "all"
        ? all
        : recipients === "students"
        ? students
        : recipients === "mentors"
        ? mentors
        : "";

    emailjs
      .send(
        "service_4k60k4g",
        "template_gc3qtua",
        {
          subject: title,
          message: body,
          to_emails: recipients_list,
        },
        "CAs9QHax00KzjGmSS"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          showOk();
        },
        (err) => {
          console.log("FAILED...", err);
          showError();
        }
      );
    setTitle("");
    setBody("");
  };
  return (
    <div
      className="main"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "60%",
      }}
    >
      <NavBar /> <SideBar />
      <Title
        title="Send Emails to users"
        caption="Send to Students, Mentors or all"
      ></Title>
      <Typography
        variant="body2"
        fontFamily={"roboto"}
        letterSpacing={1.2}
        color="secondary"
        // style={{ marginBottom: "5px" }}
      >
        Title:
      </Typography>
      <TextField
        onChange={(event) => setTitle(event.target.value)}
        required
        label="Email Title"
        variant="outlined"
        value={title}
      ></TextField>
      <Typography
        variant="body2"
        fontFamily={"roboto"}
        letterSpacing={1.2}
        color="secondary"
        style={{ marginTop: "10px" }}
      >
        Body:
      </Typography>
      <TextField
        onChange={(event) => setBody(event.target.value)}
        multiline
        required
        label="Email Body"
        variant="outlined"
        value={body}
        fullWidth
        inputProps={{
          style: {
            height: "150px",
          },
        }}
      ></TextField>
      <div className={styles.flex}>
        <Select
          id="select-recipients"
          value={recipients}
          label="Select recipients"
          onChange={handleChange}
          variant="standard"
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"students"}>Students only</MenuItem>
          <MenuItem value={"mentors"}>Mentors only</MenuItem>
        </Select>
        <Button
          variant="contained"
          onClick={onSend}
          endIcon={<SendIcon color="secondary"></SendIcon>}
        >
          Send
        </Button>
      </div>
      {ok ? (
        <Alert
          style={{
            position: "fixed",
            bottom: "10px",
            left: "10px",
            zIndex: "999999",
          }}
          onClose={() => {}}
          severity="success"
        >
          Email sent successfully
        </Alert>
      ) : null}
      {error ? (
        <Alert
          style={{
            position: "fixed",
            bottom: "10px",
            left: "10px",
            zIndex: "999999",
          }}
          onClose={() => {}}
          severity="error"
        >
          An error occurred
        </Alert>
      ) : null}
    </div>
  );
}
