import React,{useState,useEffect} from 'react'
import styles from '../styles/Lecture.module.css'

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"

export default function Lecture({name,time,notes,category,task}) {  
  return (
    <Box className={styles.modal}>
      <Typography fontFamily='roboto' component='h3' color='primary' variant={'title1'} letterSpacing={1.5}>{name}</Typography>
      <Typography fontFamily='roboto' component='p' variant='caption' color='secondary.light'>{time}</Typography> 
      <hr width='30%' style={{color:'#ffffff'}}/>
      <div className={styles.lecture_details}>
          <Typography fontFamily='roboto' component='p' variant='body2' color='secondary'>Category</Typography>
          <Typography fontFamily='roboto' component='p' variant='body2' fontWeight={'bold'} color='secondary'>{category}</Typography>
      </div>
      <div className={styles.lecture_details}>
          <Typography fontFamily='roboto' component='p' variant='body2' color='secondary'>Notes</Typography>
          <Typography fontFamily='roboto' component='p' variant='body2' fontWeight={'bold'} color='secondary'>{notes}</Typography>
      </div>
                {task ? (<>
            <div className={styles.lecture_details}>
              <Typography fontFamily='roboto' component='p' variant='body1' color='secondary'>Task</Typography>
              <Typography fontFamily='roboto' component='p' variant='body1' fontWeight={'bold'} color='secondary'>{task}</Typography>
            </div>
              <Button size='small' variant='contained' style={{marginTop:'30px'}}>Upload</Button>
          </>
          ) : null}

      
    </Box>

  )
}
