import React from "react";

import styles from "./MyActiveAdvertisement.module.css";

import square_logo from '../../assets/square_logo.png'

export const MyActiveAdvertisement = () => {
  return (
    <div className={styles.advertisement}>
      <h1>Мои объявления</h1>
      <br />
      <br />
      <div className={styles.border_bottom}>
        <div className={styles.cont}>
          <span className={styles.active}>Активные</span>
          <span className={styles.archive}>Архив</span>
        </div>
      </div>

      <div className={styles.advertisement_block}>
        <div className={styles.advertisement_image}>
            <img src={square_logo} alt="logo" />
        </div>

        <div className={styles.advertisement_text}>
            <p className={styles.course}>Курсы программирования
            (Frontend-разработка)</p>
            <p className={styles.price}>55.000₽ за услугу</p>
            <p className={styles.location}>Чеченская Республика, Грозный</p>
        </div>
      </div>
    </div>
  );
};
