import React from 'react'
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      This is a Header
      <button className={styles.btn}>Login Here</button>
    </div>
  )
}

export default Header
