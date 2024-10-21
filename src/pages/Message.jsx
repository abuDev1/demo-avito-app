// library
import React from 'react'

// components
import { Menu } from '../components/Menu/Menu'
import { Messages } from '../components/Messages/Messages'

// styles
import styles from './messages.module.css'

export const Message = () => {
  return (
    <div className={styles.container}>
        <Menu />
        <Messages />
    </div>
  )
}
