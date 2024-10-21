// library
import React from 'react'

// image
import lincode_logo_message from '../../assets/lincode-message-logo.svg'

// styles
import styles from '../../pages/messages.module.css'

export const MenuLogo = () => {
  return (
    <div className={styles.menu_logo}>
        <img src={lincode_logo_message} alt="logo" />
    </div>
  )
}
