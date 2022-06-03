import React,{useState} from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AvatarImage from './AvatarImage';


import styles from '../styles/Profile.module.css'

export default function Profile({data}) {
    
  
  return (
    <Box className={styles.modal} >
        <AvatarImage className={styles.avatar}></AvatarImage>
        <Typography fontFamily='roboto' component='h3' color='primary' variant={'body1'} letterSpacing={1.2}>{data.name.toUpperCase()}</Typography>
        <Typography fontFamily='roboto' component='p' variant='caption' color='secondary.light'>Group {data.group}</Typography>
        <hr width='30%' style={{color:'#ffffff'}}/>
        {Object.keys(data).map((key)=>{
                return (<div className={styles.card_details}>
                <Typography fontFamily='roboto' component='p' variant='caption' color='secondary'>{key}</Typography>
                <Typography fontFamily='roboto' component='p' variant='caption' fontWeight={'bold'} color='secondary'>{data[key]}</Typography>
                    </div>
                )
            })}
        </Box>
    
  )
}