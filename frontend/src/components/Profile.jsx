import React from 'react'
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import styles from '../styles/Profile.module.css'

export default function Profile({is_open}) {
    const [open, setOpen] = useState(is_open);    
    const data = {
        name: "Momen Abdelwadoud",
        group: 'C',
        email: 'momenwadoudg@gmail.com',
        overall_score: 100,
        attendance_precentage: 86,
    }

    const openAddWindow = () => {
        setOpen(true);
    };
    const closeAddWindow = () => {
        setOpen(false);
    };
  
  return (
        <Modal
          open={open}
          onClose={closeAddWindow}
        >
          <Box className={styles.modal}>

            <AvatarImage className={styles.avatar}></AvatarImage>
            <Typography fontFamily='roboto' component='h3' color='primary' variant={'title1'} letterSpacing={1.5}>{name.toUpperCase()}</Typography>
            <Typography fontFamily='roboto' component='p' variant='caption' color='secondary.light'>Group {group}</Typography>
            <hr width='30%' style={{color:'#ffffff'}}/>
            <div className={styles.profile_details}>
                {data.forEach((key,val)=>{
                    return (<div>
                <Typography fontFamily='roboto' component='p' variant='body2' color='secondary'>{key}</Typography>
                <Typography fontFamily='roboto' component='p' variant='body2' fontWeight={'bold'} color='secondary'>{val}</Typography>
                    </div>
                )
                })}
            </div>

            
          </Box>
          </Modal>
  )
}