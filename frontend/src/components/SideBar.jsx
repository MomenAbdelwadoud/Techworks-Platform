import React from 'react'

import styles from '../styles/SideBar.module.css'


import CopyRight from './CopyRight';
import ListItem from './ListItem';

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
          
        <ListItem name='participants' is_selected={true}></ListItem>
        <ListItem name='attendance'></ListItem>
        <ListItem name='schedule'></ListItem>
      </div>
      <CopyRight></CopyRight>
    </div>
  )
}
