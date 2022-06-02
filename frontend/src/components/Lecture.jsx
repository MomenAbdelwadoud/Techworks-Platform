import React,{useState} from 'react'
import styles from '../styles/Lecture.module.css'

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"

export default function Lecture({name,time,data}) {
    const [open, setOpen] = useState(false);   
    const entryName = name
    const entryTime = time

    const entryData = data

    const openAddWindow = () => {
        setOpen(true);
    };
    const closeAddWindow = () => {
        setOpen(false);
    };

  return (
    <>
    <Modal
          open={open}
          onClose={closeAddWindow}
        >
          <Box className={styles.modal}>

            <Typography fontFamily='roboto' component='h3' color='primary' variant={'title1'} letterSpacing={1.5}>{entryName}</Typography>
            <Typography fontFamily='roboto' component='p' variant='caption' color='secondary.light'>{entryTime}</Typography> 
            <hr width='30%' style={{color:'#ffffff'}}/>
            <div className={styles.profile_details}>
                {Object.entries(entryData).forEach(([key,val])=>{
                    return (<div>
                <Typography fontFamily='roboto' component='p' variant='body2' color='secondary'>{key}</Typography>
                <Typography fontFamily='roboto' component='p' variant='body2' fontWeight={'bold'} color='secondary'>{val}</Typography>
                    </div>
                )
                })}
            </div>
            {entryData.task !== 'no task' ? (<Button size='small'>Upload</Button>) : null}

            
          </Box>
          </Modal>
    </>
  )
}
