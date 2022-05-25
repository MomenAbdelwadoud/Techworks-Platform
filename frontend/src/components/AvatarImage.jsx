import React from 'react'

import styles from '../styles/AvatarImage.module.css';

export default function AvatarImage({for_account}) {
  const style_class = for_account ? styles.account_avatar : styles.avatar
  return (
    
    <>
      <img src={require('../assets/avatar test.jpg')} alt="avatar" className={style_class}/>
    </>
  )
}
