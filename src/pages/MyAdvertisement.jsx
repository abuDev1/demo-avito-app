// library
import React from 'react'

// components
import { Menu } from '../components/Menu/Menu.jsx'
import { MyActiveAdvertisement } from '../components/MyActiveAdvertisement/MyActiveAdvertisement.jsx'

// styles
import styles from '../pages/messages.module.css'

export const MyAdvertisement = () => {
  return (
    <div className={styles.container}>
        <Menu />
        <MyActiveAdvertisement />
    </div>
  )
}
