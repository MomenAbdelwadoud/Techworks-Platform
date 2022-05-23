import React from 'react'

import styles from '../styles/SideBar.module.css'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// Import people,qrcode,schedule material ui icons
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QrCodeIcon from '@mui/icons-material/QrCode';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CopyRight from './CopyRight';

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div>
        <img 
          src={require("../assets/TechWorks final design.png")}
          alt="Techworks Logo" 
          className={styles.logo}>
        </img>
      </div>
      <div className={styles.menu_items}>
      <ListItemButton>
      <ListItemIcon>
        <PeopleAltIcon color='secondary.black'/>
      </ListItemIcon>
      <ListItemText primary="PARTICIPANTS"  />
      <span className={styles.current_item}></span>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <QrCodeIcon color='secondary.black'/>
      </ListItemIcon>
      <ListItemText primary="ATTENDANCE"  />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <EventNoteIcon color='secondary.black'/>
      </ListItemIcon>
      <ListItemText primary="SCHEDULE"  />
    </ListItemButton>
      </div>
      <CopyRight></CopyRight>
    </div>
  )
}
