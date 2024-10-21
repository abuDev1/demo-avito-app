// library
import React from 'react'

// components
import { Button } from '../Button/Button'

// icons
import heart from '../../assets/heart-fav.svg'
import graph from '../../assets/graph.svg'

// styles
import styles from "./buttons.module.css"

export const AddToFavouriteAndCompareButtons = () => {
  return (
    <div className={styles.buttons_container}>
        <Button icon={heart} text="Добавить в избранное" color="white"/>
        <Button icon={graph} text="Сравнить" color="white"/>
    </div>
  )
}
