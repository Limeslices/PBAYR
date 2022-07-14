import { useRouter } from 'next/router'
import urlFor from '../utils/urlFor'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/OurWork.module.scss'
import React from 'react'

const OurWork = ({ data }) => {
  const router = useRouter()
  const handleClick = url => {
    router.push('/our-work/' + url)
  }

  return (
    <>
      <section className={styles.grid} id='work'>
        <div className={styles.text}>
          <h1 className={styles.big}>Our Work</h1>
          <p className={styles.small}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore etis nostrud exercitation Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </p>
        </div>
        <div
          className={`${styles.imgContainer} ${styles.a}`}
          onClick={() => {
            handleClick(data[0].slug.current)
          }}
        >
          <Image
            className={styles.img}
            src={urlFor(data[0].mainImage)
              .width(350)
              .height(401)
              .url()}
            width='350px'
            height='401px'
            quality='100'
          />
          <div className={styles.subtitle}>
            <Link href={'/our-work/' + data[0].slug.current}>
              <a>{data[0].title}</a>
            </Link>
          </div>
        </div>
        <div
          className={`${styles.imgContainer} ${styles.b}`}
          onClick={() => {
            handleClick(data[1].slug.current)
          }}
        >
          <Image
            className={styles.img}
            src={urlFor(data[1].mainImage)
              .width(350)
              .height(401)
              .url()}
            width='350px'
            height='401px'
            quality='100'
          />
          <div className={styles.subtitle}>
            <Link href={'/our-work/' + data[1].slug.current}>
              <a>{data[1].title}</a>
            </Link>
          </div>
        </div>
        <div
          className={`${styles.imgContainer} ${styles.c}`}
          onClick={() => {
            handleClick(data[2].slug.current)
          }}
        >
          <div className={styles.c}>
            <Image
              className={styles.img}
              src={urlFor(data[2].mainImage)
                .width(350)
                .height(687)
                .url()}
              width='350px'
              height='687px'
              quality='100'
              layout='fill'
            />
          </div>
          <div className={styles.subtitle}>
            <Link href={'/our-work/' + data[2].slug.current}>
              <a>{data[2].title}</a>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.gridMobile} id='workMobile'>
        <div className={`${styles.text} ${styles.textMobile}`}>
          <h1 className={`${styles.big} ${styles.bigMobile}`}>Our Work</h1>
          <p className={styles.small}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore etis nostrud exercitation Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </p>
        </div>
        <div className={styles.flex}>
        <div
          className={`${styles.imgContainer} ${styles.a}`}
          onClick={() => {
            handleClick(data[0].slug.current)
          }}
        >
          <Image
            className={styles.img}
            src={urlFor(data[0].mainImage)
              .width(350)
              .height(401)
              .url()}
            width='350px'
            height='401px'
            quality='100'
          />
          <div className={styles.subtitle}>
            <Link href={'/our-work/' + data[0].slug.current}>
              <a>{data[0].title}</a>
            </Link>
          </div>
        </div>
        <div
          className={`${styles.imgContainer} ${styles.b}`}
          onClick={() => {
            handleClick(data[1].slug.current)
          }}
        >
          <Image
            className={styles.img}
            src={urlFor(data[1].mainImage)
              .width(350)
              .height(401)
              .url()}
            width='350px'
            height='401px'
            quality='100'
          />
          <div className={styles.subtitle}>
            <Link href={'/our-work/' + data[1].slug.current}>
              <a>{data[1].title}</a>
            </Link>
          </div>
        </div>
        <div
          className={`${styles.imgContainer} ${styles.c}`}
          onClick={() => {
            handleClick(data[2].slug.current)
          }}
        >
          <Image
            className={styles.img}
            src={urlFor(data[2].mainImage)
              .width(350)
              .height(401)
              .url()}
            width='350px'
            height='401px'
            quality='100'
          />
          <div className={styles.subtitle}>
            <Link href={'/our-work/' + data[2].slug.current}>
              <a>{data[2].title}</a>
            </Link>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default OurWork
