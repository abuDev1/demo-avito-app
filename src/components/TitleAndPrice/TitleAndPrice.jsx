// library
import React from "react";

// styles
import styles from './titleAndPrice.module.css'

export const TitleAndPrice = ({item}) => {
  return (
    <div className={styles.title_price_container}>
      <div className="title">
        <h1>{item.title}</h1>
      </div>
      <div className="price">
        <p>{item.price}</p>
      </div>
    </div>
  );
};
