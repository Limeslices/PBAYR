import { useRouter } from 'next/router'
import styles from '../styles/Donate.module.scss'
import { useState } from 'react'
import Layout from '../components/Layout'
import AltNav from '../components/AltNav'
import Hr from '../components/Hr'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import CheckoutForm from '../components/CheckoutForm'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  'pk_test_51LH8qnEuupSx6N55ZZQylWPrKwlU0q0ERx8uoNdB0w7iHH0Dp1TIgTH1yV63L8NG552kLbZrF3VDJH2Rh4f0Wxqe003846bg4Y'
)

export default function App () {
  const [clientSecret, setClientSecret] = React.useState('')

  const [open, setOpen] = useState(false)
  const [donateAmount, setDonateAmount] = useState(0)

  const handleHamClick = () => {
    setOpen(!open)
  }
  const router = useRouter()
  React.useEffect(() => {
    if (!router.isReady) return
    const { amount } = router.query
    if (!amount || amount <= 0) {
      router.push('/donate')
    }
    setDonateAmount(amount)
    // Create PaymentIntent as soon as the page loads
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price: amount })
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret))
  }, [router.isReady])

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#ffffff',
      colorBackground: '#0B6051',
      colorText: '#93C2BA',
      colorDanger: '#FF5757',
      fontFamily: 'roboto, system-ui, sans-serif',
      borderRadius: '0px'
    }
  }
  const options = {
    clientSecret,
    appearance
  }

  return (
    <div className='App'>
      <AltNav handleClick={handleHamClick} />
      <Sidebar open={open} close={handleHamClick} />
      <Layout>
        <div className={styles.flex}>
          <h1 className={styles.big}>You Help When It's Needed Most</h1>
          {clientSecret && (
            <div className={styles.stripe}>
              <Elements options={options} stripe={stripePromise}>
              <h1 className={styles.don}>Donation Amount: ${donateAmount}</h1>
                <CheckoutForm />
              </Elements>
            </div>
          )}
        </div>
      </Layout>
    </div>
  )
}
