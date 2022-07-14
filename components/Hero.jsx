import {useRouter} from 'next/router'
import Image from 'next/image'
import styles from '../styles/Hero.module.scss'
import React from 'react'

const Hero = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/donate')
  }

  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <h1 className={styles.big}>Charity is An Act Of A Soft Heart.</h1>
        <span className={`${styles.subFont} ${styles.subtitle}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet
        </span>
        <button className={styles.btn} onClick={handleClick}>Donate Now</button>
        <div className={styles.social}>
          <span className={styles.social__link}>FACEBOOK</span>
          <div className={styles.dot}></div>
          <span className={styles.social__link}>INSTAGRAM</span>
        </div>
      </div>
      <div className={`${styles.wrapper} ${styles.second}`}>
        <div className={styles.image}>
          <Image
            src='/static/hero.png'
            width='584px'
            height='676px'
            layout='responsive'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
