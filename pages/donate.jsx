import { useRouter } from 'next/router'
import styles from '../styles/Donate.module.scss'
import { useState } from 'react'
import Layout from '../components/Layout'
import AltNav from '../components/AltNav'
import Hr from '../components/Hr'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import React from 'react'

export default function App () {
  const [open, setOpen] = useState(false)
  const [formInput, setFormInput] = useState('')

  const handleHamClick = () => {
    setOpen(!open)
  }

  const handleFormChange = (event) => {
    setFormInput(event.target.value)
  }

  const router = useRouter()
  const handleFormClick = (event) => {
    event.preventDefault()

    if(formInput <= 0 || !formInput) {
      return
    }

    router.push('/donate-card?amount=' + formInput)
  }

  return (
    <div className='App'>
      <AltNav handleClick={handleHamClick} />
      <Sidebar open={open} close={handleHamClick} />
      <Layout>
        <div className={styles.flex}>
          <h1 className={styles.big}>You Help When It's Needed Most</h1>
          <div className={styles.stripe}>
            <h1 className={styles.amt}>Donation Amount</h1>
            <form
              action=''
              onSubmit={handleFormClick}
              className={styles.fform}
            >
              <input
                type='number'
                required
                value={formInput}
                onChange={handleFormChange}
                className={styles.stripeFirst}
              />
              <button className={styles.btn}>Continue</button>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  )
}
