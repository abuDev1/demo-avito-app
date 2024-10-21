// library
import React from "react";

// components
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";

// styles
import styles from "../content.module.css";

export const Search = (props) => {
  return (
    <div className={styles.search}>
      <>
        <Input placeholder="Поиск по объявлениям ..." />
      </>
      <div>
        <Button text="Найти" color="white" width="150px" />
      </div>
    </div>
  );
};
