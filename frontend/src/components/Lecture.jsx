import React,{useState,useEffect} from 'react'
import styles from '../styles/Lecture.module.css'

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"

export default function Lecture({name,time,notes,category,task,show}) {
    const [open, setOpen] = useState(show);
    const data = {category,notes}   

    useEffect(() => {
      setOpen(show)
    }, [show]);

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

            <Typography fontFamily='roboto' component='h3' color='primary' variant={'title1'} letterSpacing={1.5}>{name}</Typography>
            <Typography fontFamily='roboto' component='p' variant='caption' color='secondary.light'>{time}</Typography> 
            <hr width='30%' style={{color:'#ffffff'}}/>
            <div className={styles.profile_details}>
                {Object.entries(data).forEach(([key,val])=>{
                    return (<div>
                <Typography fontFamily='roboto' component='p' variant='body2' color='secondary'>{key}</Typography>
                <Typography fontFamily='roboto' component='p' variant='body2' fontWeight={'bold'} color='secondary'>{val}</Typography>
                    </div>
                )
                })}
                {task ? (<div>
                  <Typography fontFamily='roboto' component='p' variant='body1' color='secondary'>Task</Typography>
                  <Typography fontFamily='roboto' component='p' variant='body1' fontWeight={'bold'} color='secondary'>{task}</Typography>
                  <Button size='small'>Upload</Button>
                </div>) : null}
            </div>

            
          </Box>
          </Modal>
    </>
  )
}
