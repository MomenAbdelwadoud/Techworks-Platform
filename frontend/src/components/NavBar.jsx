import React,{useContext} from 'react';
import styles from '../styles/NavBar.module.css';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from "@mui/material/Typography";
import AvatarImage from './AvatarImage';
import {UserContext} from '../context/UserContext'

const NavBar = () => {
    // get logout from userContext
    const {logout,user} = useContext(UserContext);
    const onLogout = ()=>{
        logout()
    }
    console.log(user)
    return (
        <div className={styles.navbar}>
            <div className={styles.account}>
                <AvatarImage for_account></AvatarImage>
                <div className={styles.account_info}>
                    <Typography style={{cursor:'pointer'}} component="p" variant='body1' color="primary">{user.username}</Typography>
                    <Typography component="p" variant="caption" color="secondary.light">User ID: {user.user_id}</Typography>
                </div>
                <div className={styles.logout} onClick={onLogout}>
                    <LogoutIcon color="secondary.light"></LogoutIcon>
                    <Typography component="p" variant="caption" fontWeight='light' color="secondary.light">Logout</Typography>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
