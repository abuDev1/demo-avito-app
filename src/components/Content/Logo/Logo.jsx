// library
import React from 'react'
import { Link } from 'react-router-dom'

// logo
import logo from "../../../assets/lincode-logos.svg"

// styles
import styles from "../content.module.css"

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img src={logo} alt="logo" />  
      </Link>
    </div>
  )
}
