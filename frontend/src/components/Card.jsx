import React,{useState} from 'react';
import styles from '../styles/Card.module.css';
import AvatarImage from './AvatarImage';
import { Typography } from '@mui/material';
import Profile from './Profile';

const Card = ({data}) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () =>{
        setOpen(true)
    }
    return (
        <>
        <div className={styles.card} onClick={handleOpen}>
            <AvatarImage className={styles.avatar}></AvatarImage>
            <Typography fontFamily='roboto' component='h3' color='primary' variant={'title1'} letterSpacing={1.5}>{data.name.toUpperCase()}</Typography>
            <Typography fontFamily='roboto' component='p' variant='caption' color='secondary.light'>Group {data.group}</Typography>
            {/* <hr width='30%' style={{color:'#ffffff'}}/> */}
            {Object.entries(data).forEach(([key,val])=>{
                    return (<div>
                <Typography fontFamily='roboto' component='p' variant='body2' color='secondary'>{key}</Typography>
                <Typography fontFamily='roboto' component='p' variant='body2' fontWeight={'bold'} color='secondary'>{val}</Typography>
                    </div>
                )
                })}
        </div>
        {open ? <Profile ></Profile>: null}
        </>
    );
}

export default Card;
