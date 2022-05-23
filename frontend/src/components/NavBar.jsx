import React from 'react';
import styles from '../styles/NavBar.module.css';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from "@mui/material/Typography";
import AvatarImage from './AvatarImage';

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.account}>
                <AvatarImage></AvatarImage>
                <div className={styles.account_info}>
                    <Typography style={{cursor:'pointer'}} component="p" variant='body1' color="primary">Account name</Typography>
                    <Typography component="p" variant="caption" color="secondary.light">Account role</Typography>
                </div>
                <div className={styles.logout}>
                    <LogoutIcon color="secondary.light"></LogoutIcon>
                    <Typography component="p" variant="caption" fontWeight='light' color="secondary.light">Logout</Typography>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
