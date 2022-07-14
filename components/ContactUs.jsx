import Image from 'next/image'
import styles from '../styles/ContactUs.module.scss'
import Layout from './Layout'
import React from 'react'

const ContactUs = () => {
  return (
    <div className={styles.lay} id='contact'>
      <section className={styles.flex}>
        <div className={styles.graphic}>
          <div className={styles.img}>
            <Image
              src='/static/tilt1.svg'
              width='683px'
              height='120px'
              layout='responsive'
            />
          </div>
          <div className={styles.left}>
            <h1 className={styles.bigWhite}>We'd love to hear from you</h1>
            <p className={`${styles.bigWhite} ${styles.smallWhite}`}>kohlbyrdvlogs@gmail.com</p>
            <p className={`${styles.bigWhite} ${styles.smallWhite}`}>985-276-0917</p>
          </div>
        </div>
      </section>
      <div className={styles.right}>
        <div className={styles.contactForm}>
          <h1 className={styles.leading}>Volunteer Form</h1>
          <form
            className={styles.form}
            action='https://formsubmit.co/424bf6c57eea13181d0f8ea019a923d8'
            method='POST'
          >
            <input
              type='text'
              name='name'
              className={styles.smallInput}
              placeholder='Name'
              required
            />
            <input
              type='email'
              name='email'
              className={styles.smallInput}
              placeholder='Email'
              required
            />
            <textarea
              type='text'
              name='body'
              className={`${styles.smallInput} ${styles.body}`}
              placeholder='Body'
            />
            <input type='submit' value='Submit' className={styles.btn} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
