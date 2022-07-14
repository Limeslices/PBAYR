import React from 'react'
import styles from '../styles/LayoutHeader.module.scss'

const LayoutHeader = ({ children }) => {
  return (
    <div className={styles.content}>
      <div className={styles.container}>{children}</div>
    </div>
  )
}

export default LayoutHeader
