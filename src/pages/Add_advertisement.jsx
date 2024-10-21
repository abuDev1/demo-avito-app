// library
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// styles
import styles from "./add_advertisement.module.css";
import { Button } from "../components/Button/Button";

import { sendData } from "../redux/sendDataReducer/action";

export const Add_advertisement = () => {
  const [nameOfAdvertisement, setNameOfAdvertisement] = useState('')
  const [image, setImage] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(sendData(nameOfAdvertisement, image, desc, price))
  }

  return (
    <>
      <div className="container">
        <h1>Разместить объявление</h1>
        <div className={styles.titlesOfAdd}>
          <b>Название объявления</b>
        </div>
        <div className={styles.input}>
          {/* <Input placeholder="Введите название объявления ..." width="300px" /> */}
          <input type="text" 
          placeholder="Введите название объявления ..."
          value={nameOfAdvertisement}
          onChange={(e) => setNameOfAdvertisement(e.target.value)}
          />
        </div>
        <div className={styles.titlesOfAdd}>
          <b>Описание</b>
        </div>
        <div className={styles.input}>
          <textarea name="" id=""
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.titlesOfAdd}>
          <b>Фото объявления</b>
        </div>
        <div className={styles.input_photo}>
          {/* <Input placeholder="Переместите сюда фото ..." width="300px"/> */}
          <input type="text" 
          placeholder="Переместите сюда фото ..."
          value={image}
          onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className={styles.titlesOfAdd}>
          <b>Цена</b>
        </div>
        <select>
          <option value="-- Цена --">-- Цена от --</option>
          <option value="1000">1000₽</option>
          <option value="2000">2000₽</option>
          <option value="3000">3000₽</option>
          <option value="4000">4000₽</option>
          <option value="5000">5000₽</option>
          <option value="6000">6000₽</option>
          <option value="7000">7000₽</option>
          <option value="8000">8000₽</option>
          <option value="9000">9000₽</option>
          <option value="10000">10000₽</option>
        </select>

        <p>Или введите свою цену</p>

        {/* <Input width="300px" type="number" placeholder="-- ₽ --"/> */}
        <input type="text" 
        placeholder="-- ₽ --"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        />
        <div className={styles.button_ad}> 
          <Button 
          text="Отправить"
          onSubmit={handleClick}
          />
        </div>
      </div>
    </>
  );
};