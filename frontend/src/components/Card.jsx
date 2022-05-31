import React,{useState} from 'react';
import styles from '../styles/Card.module.css';
import AvatarImage from './AvatarImage';
import { Typography } from '@mui/material';
import Profile from './Profile';

const Card = ({name}) => {
    let group = 'Group C';
    const [open, setOpen] = useState(false)
    const handleOpen = () =>{
        setOpen(true)
    }
    return (
        <>
        <div className={styles.card} onClick={handleOpen}>
            <AvatarImage className={styles.avatar}></AvatarImage>
            <Typography fontFamily='roboto' component='h3' color='primary' variant={'title1'} letterSpacing={1.5}>{name.toUpperCase()}</Typography>
            <Typography fontFamily='roboto' component='p' variant='caption' color='secondary.light'>{group}</Typography>
            {/* <hr width='30%' style={{color:'#ffffff'}}/> */}
            <div className={styles.card_details}>
                <Typography fontFamily='roboto' component='p' variant='body2' color='secondary'>Score</Typography>
                <Typography fontFamily='roboto' component='p' variant='body2' fontWeight={'bold'} color='secondary'>10</Typography>
            </div>
        </div>
        <Profile is_open={open}></Profile>
        </>
    );
}

export default Card;
