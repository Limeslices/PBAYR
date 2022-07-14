import Hr from '../components/Hr'
import { useState } from 'react'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import AltNav from '../components/AltNav'
import Layout from '../components/Layout'
import styles from '../styles/DonationCompleted.module.scss'
import React from 'react'

const donationCompleted = () => {
  const [open, setOpen] = useState(false)

  const handleHamClick = () => {
    setOpen(!open)
  }
  return (
    <div>
      <AltNav handleClick={handleHamClick} />
      <Sidebar open={open} close={handleHamClick} />
      <Layout>
        <div className={styles.flex}>
          <h1 className={styles.big}>Thank you for your donation!</h1>
          <p className={styles.small}>Your donation has been sent</p>
        </div>
        <Hr />
      </Layout>
      <Footer noTop/>
    </div>
  )
}

export default donationCompleted
