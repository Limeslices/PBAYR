import styles from '../styles/Layout.module.scss'
import React from 'react'

const Layout = ({footer, children}) => {

  return (
    <div className={`${styles.container} ${footer ? styles.footer : ''}`}>{children}</div>
  )
}

export default Layout