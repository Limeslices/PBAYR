import client from '../client'
import groq from 'groq'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import Spotlight from '../components/Spotlight'
import Upcoming from '../components/Upcoming'
import OurWork from '../components/OurWork'
import MeetCard from '../components/MeetCard'
import Hr from '../components/Hr'
import AboutCard from '../components/AboutCard'
import Layout from '../components/Layout'
import LayoutHeader from '../components/LayoutHeader'
import Divider from '../components/Divider'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.scss'

export default function Home ({ stats, spotlights, ourWork, upcoming }) {
  const [open, setOpen] = useState(false)

  const handleHamClick = () => {
    setOpen(!open)
  }
  return (
    <div>
      <Sidebar open={open} close={handleHamClick} />
      <LayoutHeader>
        <Nav handleClick={handleHamClick} />
        <Hero />
      </LayoutHeader>
      <Divider stats={stats} />
      <Layout>
        <AboutCard />
        <Hr />
        <MeetCard />
        <Hr />
        <OurWork data={ourWork}/>
        <Hr />
        <Upcoming data={upcoming}/>
        <Hr />
        <Spotlight spotlights={spotlights}/>
        <Hr />
      </Layout>
      <ContactUs />
      <Layout>
        <Hr />
      </Layout>
      <Footer />
    </div>
  )
}

export async function getStaticProps () {
  const stats = await client.fetch(
    groq`*[_type == "stats"]{
        stat,
        subtitle
        }`
  )

  const spotlights = await client.fetch(
    groq`*[_type == "spotlight"]{
        name,
        image,
        subline
        }`
  )

  const ourWork = await client.fetch(
    groq`*[_type == "ourWork"]{
        title,
        mainImage,
        slug
        }`
  )

  const upcoming = await client.fetch(
    groq`*[_type == "upcoming"]{
        title,
        mainImage,
        slug
        }`
  )

  return {
    props: {
      stats,
      spotlights,
      ourWork,
      upcoming
    },
    revalidate: 60
  }
}
