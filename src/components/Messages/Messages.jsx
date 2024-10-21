// library
import React from 'react'

// styles
import styles from "../../pages/messages.module.css";

// components
import { MessagesButtons } from './MessagesButtons';
import { Chats } from '../../Chats/Chats';

export const Messages = () => {
  return (
    <div className={styles.messages}>
        <h2>Сообщения</h2>
        <MessagesButtons />
        <Chats />
    </div>
  )
}
 