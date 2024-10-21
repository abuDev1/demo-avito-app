// library
import React, { useState } from "react";

// components
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { DropDownMenu } from "../DropDownMenu/DropDownMenu";

// icons
import heart from "../../assets/heart.svg";
import avatar from "../../assets/lincode-message-logo.svg";
import message from "../../assets/message.svg";

// styles
import styles from "./header.module.css";

export const Navigation = () => {
  const [show, setShow] = useState(false)

  return (
    <div className={styles.navigation}>
      <div className={styles.heart}>
        <img src={heart} alt="heart" />
      </div>
      <div className={styles.message}>
        <Link to="/message">
          <img src={message} alt="message" />
        </Link>
      </div>
      <div className={styles.announcement}>
        <Link to="myAdd">Мои объявления</Link>
      </div>
      <div className={styles.avatar} onClick={() => setShow(!show)}>
        <img src={avatar} alt="avatar" />
        <p>Lincode</p>
        {
          show ? <div className={styles.absolute}><DropDownMenu/></div> : ''
        }
      </div>
      <Link to="/add/advertisement">
        <Button color="white" text="Разместить объявление" width="205px" />
      </Link>
    </div>
  );
};
