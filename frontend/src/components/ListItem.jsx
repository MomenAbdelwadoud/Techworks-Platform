import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// Import people,qrcode,schedule material ui icons
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QrCodeIcon from '@mui/icons-material/QrCode';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Email from '@mui/icons-material/Email';
import React from 'react'

export default function ListItem({name}) {
    const icons = {'participants':PeopleAltIcon,'attendance':QrCodeIcon,'schedule':EventNoteIcon,'emailing':Email}
    const Icon = icons[name];
    const title = name.toUpperCase()
    const location = window.location.pathname
  return (
    <a href={'/'+ name} style={{color:'inherit',textDecoration:'inherit'}}>
     <ListItemButton selected={location.slice(1) === name} >
      <ListItemIcon>
        <Icon color='secondary.black'/>
      </ListItemIcon>
      <ListItemText primary={title}  />
    </ListItemButton>
    </a>
  )
}
