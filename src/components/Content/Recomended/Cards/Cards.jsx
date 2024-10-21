// library
import React from "react";
import { useSelector } from "react-redux";

// components
import { Card } from "./Card";

// styles
import styles from './cards.module.css'

export const Cards = (props) => {
  const cards = useSelector((state) => state.cards.cards)

  return (
    <div className={styles.cards_container}>
      {cards.map((card) => <Card card={card} key={card.id}/>)}
    </div>
  );
};
  