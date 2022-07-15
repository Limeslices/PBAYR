import Hr from '../../../components/Hr'
import Sidebar from '../../../components/Sidebar'
import { useState } from 'react'
import AltNav from '../../../components/AltNav'
import client from '../../../client'
import groq from 'groq'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import urlFor from '../../../utils/urlFor'
import { PortableText } from '@portabletext/react'
import styles from '../../../styles/Post.module.scss'
import React from 'react'
import Layout from '../../../components/Layout'
import Footer from '../../../components/Footer'

const ptComponents = {
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined
      return (
        <>
          <Link href={value?.href}>
            <a
              target={target}
              className={styles.link}
              rel={target === '_blank' && 'nofollow'}
            >
              {children}
            </a>
          </Link>
        </>
      )
    }
  },
  block: {
    h1: ({ children }) => <h2 className={styles.h}>{children}</h2>,
    h2: ({ children }) => <h2 className={styles.h}>{children}</h2>,
    h3: ({ children }) => <h2 className={styles.h}>{children}</h2>,
    h4: ({ children }) => <h2 className={styles.h}>{children}</h2>
  },
  hardBreak: false
}

const Post = ({ post }) => {
  const [open, setOpen] = useState(false)

  const handleHamClick = () => {
    setOpen(!open)
  }

  const { title, mainImage, body = [], publishedAt } = post

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const dateUnformatted = new Date(publishedAt)
  let hours = dateUnformatted.getHours()
  let minutes = dateUnformatted.getMinutes()
  const ampm = hours >= 12 ? 'pm' : 'am'

  hours %= 12
  hours = hours || 12
  minutes = minutes < 10 ? `0${minutes}` : minutes

  const strTime = `${hours}:${minutes} ${ampm}`
  const publishedAtDate = `${
    months[dateUnformatted.getMonth()]
  } ${dateUnformatted.getDay()}, ${dateUnformatted.getFullYear()}, ${strTime}`

  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <AltNav handleClick={handleHamClick} />
      <Sidebar open={open} close={handleHamClick} />
      <main role='main'>
        <Layout>
          <h1 className={styles.big}>{title}</h1>
          <span className={styles.date}>Posted {publishedAtDate}</span>

          <div className={styles.img}>
            <Image
              src={urlFor(mainImage)
                .width(1168)
                .height(400)
                .url()}
              width='1168px'
              height='400px'
            />
          </div>
        </Layout>
        <Layout>
          <div className={styles.flex}>
            <div className={styles.socialIcons}>
              <Link href='https://www.instagram.com/'>
                <a target='_blank'>
                  <Image
                    src='/static/instagram.svg'
                    width='24px'
                    height='24px'
                  />
                </a>
              </Link>
              <Link href='https://www.facebook.com/'>
                <a target='_blank'>
                  <Image
                    src='/static/facebook.svg'
                    width='24px'
                    height='24px'
                  />
                </a>
              </Link>
            </div>
            <article className={styles.text__container}>
              <PortableText value={body} components={ptComponents} />
            </article>
          </div>
          <Hr />
        </Layout>
        <Footer />
      </main>
    </>
  )
}

const query = groq`*[_type == "upcoming" && slug.current == $slug][0]{
  title,
  mainImage,
  body,
  publishedAt
}`

export const getStaticProps = async context => {
  const post = await client.fetch(query, { slug: context.params.slug })

  return {
    props: {
      post
    },

  }
}

export const getStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "upcoming" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map(slug => ({ params: { slug } })),
    fallback: false
  }
}

export default Post
