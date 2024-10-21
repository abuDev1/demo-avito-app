// library
import React from "react";

// styles
import styles from "../../pages/messages.module.css";

// components
import { Button } from "../Button/Button";

export const MessagesButtons = () => {
  return (
    <div className={styles.messages_button_cont}>
      <div className={styles.all_messages_button}>
        <Button text="Все сообщения" width="200px"/>
      </div>
      <div className={styles.filtered_button}>
        <Button text="Фильтр" width="200px"/>
      </div>
      <div className={styles.search_form}>
        <input type="text" placeholder="Поиск по сообщениям ..."/>
      </div>
    </div>
  );
};
