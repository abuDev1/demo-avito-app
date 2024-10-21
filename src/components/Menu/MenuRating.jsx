// import
import React from 'react'

// image
import star from '../../assets/star.png'

// styles
import styles from '../../pages/messages.module.css'


export const MenuRating = () => {
  return (
    <div className={styles.menu_rating}>
        <span className={styles.rating}>5,0</span>
        <span className={styles.star}><img src={star} alt="star" /></span>
        <span className={styles.star}><img src={star} alt="star" /></span>
        <span className={styles.star}><img src={star} alt="star" /></span>
        <span className={styles.star}><img src={star} alt="star" /></span>
        <span className={styles.star}><img src={star} alt="star" /></span>
    </div>
  )
}
