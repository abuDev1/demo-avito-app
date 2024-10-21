// library
import React from 'react'

// mock
import { Chats_item } from './Chats-mock'

// components
import { Chat } from './Chat'

// styles
import styles from '../pages/messages.module.css'
 

export const Chats = () => {
  return (
    <div className={styles.chats}>
        {
            Chats_item.map((chat) => <Chat chat={chat}/>)
        }
    </div>
  )
}
