import Layout from './Layout'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/AltNav.module.scss'
import React from 'react'


const AltNav = ({handleClick}) => {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.right}>
            <Link href='/'>
              <a className={styles.logo}>
                <h1 className={styles.logo}>LOGO</h1>
              </a>
            </Link>
          </div>
          <div className={styles.left}>
            <Link href='/about'>
              <a className={styles.nav__link}>About Us</a>
            </Link>
            <Link href='/#upcoming'>
              <a className={styles.nav__link}>Upcoming</a>
            </Link>
            <Link href='/donate'>
              <a className={styles.nav__link}>Donate</a>
            </Link>
            <Link href='/#contact'>
              <a className={styles.nav__link}>Contact Us</a>
            </Link>
          </div>
          <div className={styles.hamburger}>
            <button onClick={handleClick} className={styles.btn}>
              <Image src='/static/hamburger.svg' width='25px' height='25px' />
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default AltNav
