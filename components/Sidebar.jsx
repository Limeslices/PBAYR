import Image from 'next/image'
import styles from '../styles/Sidebar.module.scss'
import Link from 'next/link'
import React from 'react'

const Sidebar = ({ open, close }) => {
  if (open) {
    return (
      <nav className={styles.nav}>
        <button onClick={close} className={styles.closeButton}>
          <Image src='/static/x.svg' layout='fill' />
        </button>
        <div className={styles.flex}>
          <Link href='/about'>
            <a onClick={close} className={styles.nav__link}>About Us</a>
          </Link>
          <Link href='/#upcoming'>
            <a onClick={close} className={styles.nav__link}>Upcoming</a>
          </Link>
          <Link href='/donate'>
            <a onClick={close} className={styles.nav__link}>Donate</a>
          </Link>
          <Link href='/#contact'>
            <a onClick={close} className={styles.nav__link}>Contact Us</a>
          </Link>
        </div>
      </nav>
    )
  }
}

export default Sidebar
