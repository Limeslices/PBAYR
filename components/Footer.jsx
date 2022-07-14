import Link from 'next/link'
import Layout from './Layout'
import FooterTop from './FooterTop'
import styles from '../styles/Footer.module.scss'
import React from 'react'

const Footer = ({ noTop }) => {
  return (
    <div className={styles.margin}>
      {!noTop && <FooterTop />}
      <Layout>
        <div className={styles.content}>
          <div className={styles.main}>
            <span className={styles.leading}>LOGO</span>
            <span className={styles.design}>
              Design by{' '}
              <Link href='http://www.kohlbyrd.com/'>
                <a>Kohl Byrd</a>
              </Link>
            </span>
          </div>
          <div className={styles.nav}>
            <p className={styles.leading}>Navigation</p>
            <p className={styles.trailing}>Home</p>
            <p className={styles.trailing}>About Us</p>
            <p className={styles.trailing}>Our Work</p>
            <p className={styles.trailing}>Contact Us</p>
          </div>
          <div className={styles.donate}>
            <p className={styles.leading}>Donate</p>
          </div>
          <div className={styles.contact}>
            <p className={styles.trailing}>Contact</p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Footer
