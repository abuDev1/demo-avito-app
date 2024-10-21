// library
import React from "react";

// image
import userAva from "../assets/userAva.svg";

// styles
import styles from "../pages/messages.module.css";

export const Chat = ({ chat }) => {
  return (
    <div className={styles.chat}>
      <div className={styles.userAva}>
        <img src={userAva} alt="ava" />
      </div>
      <div className={styles.messages_info}>
        <h3>{chat.userName}</h3>
        <p>
          <b>
            <i>{chat.titleAd}</i>
          </b>
        </p>
        <p>{chat.message}</p>
      </div>
    </div>
  );
};
