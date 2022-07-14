import urlFor from '../utils/urlFor'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Upcoming.module.scss'
import React from 'react'
import { useRouter } from 'next/router'


const Upcoming = ({ data }) => {
  const router = useRouter()
  const handleClick = url => {
    console.log(url)
    router.push('/upcoming/' + url)
  }
  return (
    <section className={styles.gridMobile} id='upcoming'>
      <div className={`${styles.text} ${styles.textMobile}`}>
        <h1 className={`${styles.big} ${styles.bigMobile}`}>Upcoming</h1>
      </div>
      <div className={styles.flex}>
        {data &&
          data.map((stat, index) => {
            return (
              <div
                className={`${styles.imgContainer} ${styles.a}`}
                key={index}
                onClick={() => {
                  handleClick(stat.slug.current)
                }}
              >
                <Image
                  className={styles.img}
                  src={urlFor(stat.mainImage)
                    .width(350)
                    .height(401)
                    .url()}
                  width='350px'
                  height='401px'
                  quality='100'
                />
                <div className={styles.subtitle}>
                  <Link href={'/upcoming/' + stat.slug.current}>
                    <a>{stat.title}</a>
                  </Link>
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default Upcoming
