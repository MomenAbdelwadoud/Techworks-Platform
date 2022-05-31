import React, { useState } from "react";
import Title from "../components/Title";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";

import styles from "../styles/MaillistPage.module.css";

export default function MaillistPage() {
  const [recipients, setRecipients] = useState("participants");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleChange = (e) => {
    setRecipients(e.target.value);
  };
  const onSend = () => {
    const email_data = {
      recipients,
      title,
      body,
    };
    console.log(email_data);
    setTitle("");
    setBody("");
  };
  return (
    <div
      className="main"
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <Title
        title="Send Emails to users"
        caption="Send to Participants, mentors or all"
      ></Title>
      <TextField
        onChange={(event) => setTitle(event.target.value)}
        required
        label="Email Title"
        variant="outlined"
        value={title}
      ></TextField>
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
          <MenuItem value={"participants"}>Participants only</MenuItem>
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
    </div>
  );
}
