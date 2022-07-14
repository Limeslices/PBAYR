import Layout from './Layout'
import Link from 'next/link'
import styles from '../styles/FooterTop.module.scss'
import React from 'react'

const FooterTop = () => {
  return (
    <div className={styles.wrapper}>
      <Layout footer>
        <div className={styles.flex}>
          <Link href='/donate'>
            <a className={styles.btn}>Donate Now</a>
          </Link>
          <h1 className={styles.big}>Let's Continue the Blessings Together & Be The Change !</h1>
        </div>
      </Layout>
    </div>
  )
}

export default FooterTop
