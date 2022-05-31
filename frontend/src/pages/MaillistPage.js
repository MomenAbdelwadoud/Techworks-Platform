import React,{useState} from "react";
import Title from "../components/Title";
import TextField from "@mui/material/TextField";
import Select from '@mui/material/Select';
import SendIcon from '@mui/icons-material/Send';

import styles from '../styles/MaillistPage.module.css'



export default function MaillistPage() {
  const [recipients,setRecipients] = useState('all')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


  const handleChange = (e) => {
    setRecipients(e.target.value)
      }
  const onSend = () => {
    const email_data = {
      recipients,title,body
    }
      }
  return <div className='main'>
    <Title Title="Send Emails to users" caption="Send to Participants, mentors or all"></Title>
    <Typography variant="caption" color="secondary.light">
                Title:
              </Typography>
    <TextField onChange={event => setTitle(event.target.value)} required label="Email Title" variant='outlined' fullWidth></TextField>
    <Typography variant="caption" color="secondary.light">
                Body:
              </Typography>
    <TextField onChange={event => setBody(event.target.value)} rows={10} required label="Email Body" variant='outlined' fullWidth></TextField>
    <div className={styles.flex}>
    <Select
          id="select-recipients"
          value={recipients}
          label="Select recipients"
          onChange={handleChange}
        >
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'participants'}>Participants only</MenuItem>
          <MenuItem value={'mentors'}>Mentors only</MenuItem>
        </Select>
        <Button
          variant="contained"
          onClick={onSend}
          endIcon={<SendIcon></SendIcon>}
        >
          Send
        </Button>
    </div>
  </div>;
}
