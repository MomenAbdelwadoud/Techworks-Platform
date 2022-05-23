import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// Import people,qrcode,schedule material ui icons
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QrCodeIcon from '@mui/icons-material/QrCode';
import EventNoteIcon from '@mui/icons-material/EventNote';
import React from 'react'
import {useLocation} from 'react-router-dom'

export default function ListItem({name, is_selected}) {
    const icons = {'participants':PeopleAltIcon,'attendance':QrCodeIcon,'schedule':EventNoteIcon}
    const Icon = icons[name];
    const title = name.toUpperCase()
    const location = useLocation()
  return (
    <a href={'/'+ name} style={{color:'inherit',textDecoration:'inherit'}}>
     <ListItemButton selected={location.pathname.slice(1) === name} >
      <ListItemIcon>
        <Icon color='secondary.black'/>
      </ListItemIcon>
      <ListItemText primary={title}  />
    </ListItemButton>
    </a>
  )
}
