// library
import React from 'react'

// components
import { Cards } from './Cards/Cards'

// styles
import styles from "../content.module.css"

export const Recomended = () => {
  return (
    <div className={styles.recomended_container}>
    <h1>Рекомендация для Вас</h1>
    <Cards />
    </div>
  )
}
