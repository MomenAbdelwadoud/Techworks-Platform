import React,{useState} from 'react';
import styles from '../styles/Card.module.css';
import AvatarImage from './AvatarImage';
import { Typography } from '@mui/material';
import Profile from './Profile';

import Modal from "@mui/material/Modal";


const Card = ({data}) => {
    const [open, setOpen] = useState(false)
    const closeCardWindow = () => {
        setOpen(false);
    };
    const handleOpen = () =>{
        setOpen(true)
    }

    let card_data ={
        name: data.name,
        group: data.group,
        attendance: data.attendance_percentage,
        score: data.overall_score,
      }
    

    return (
        <>
        <div className={styles.card} onClick={handleOpen}>
            <AvatarImage className={styles.avatar}></AvatarImage>
            <Typography fontFamily='roboto' component='h3' color='primary' variant={'body1'} letterSpacing={1.2}>{card_data.name.toUpperCase()}</Typography>
            <Typography fontFamily='roboto' component='p' variant='caption' color='secondary.light'>Group {card_data.group}</Typography>
            <hr width='30%' style={{color:'#ffffff'}}/>
            {Object.keys(card_data).map((key)=>{
                return (<div className={styles.card_details}>
                <Typography fontFamily='roboto' component='p' variant='caption' color='secondary'>{key}</Typography>
                <Typography fontFamily='roboto' component='p' variant='caption' fontWeight={'bold'} color='secondary'>{card_data[key]}</Typography>
                    </div>
                )
            })}
            </div>
            <Modal open={open} onClose={closeCardWindow}>
            <Profile data={data}></Profile>
        </Modal>
        </>
    );
}

export default Card;
