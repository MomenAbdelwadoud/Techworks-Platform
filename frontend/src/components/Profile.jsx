import React,{useState} from 'react'
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AvatarImage from './AvatarImage';


import styles from '../styles/Profile.module.css'

export default function Profile({is_open}) {
    const [open, setOpen] = useState(is_open);    
    const data = {
        name: "Momen Abdelwadoud",
        group: 'C',
        email: 'momenwadoudg@gmail.com',
        overall_score: 100,
        attendance_percentage: 86,
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
            <Typography fontFamily='roboto' component='h3' color='primary' variant={'title1'} letterSpacing={1.5}>{data.name.toUpperCase()}</Typography>
            <Typography fontFamily='roboto' component='p' variant='caption' color='secondary.light'>Group {data.group}</Typography>
            <hr width='30%' style={{color:'#ffffff'}}/>
            <div className={styles.profile_details}>
                {Object.entries(data).forEach(([key,val])=>{
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