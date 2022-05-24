import React from 'react'

import styles from '../styles/SideBar.module.css'


import CopyRight from './CopyRight';
import ListItem from './ListItem';

export default function SideBar() {
  const sidebarItems = ['participants','attendance','schedule']
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
          
          {sidebarItems.map(item => <ListItem name={item}/>)}
      </div>
      <CopyRight></CopyRight>
    </div>
  )
}
