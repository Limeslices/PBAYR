import Image from 'next/image'
import styles from '../styles/Spotlight.module.scss'
import React from 'react'
import urlFor from '../utils/urlFor'

const Spotlight = ({ spotlights }) => {
  return (
    <section>
      <h1 className={styles.big}>Spotlight</h1>
      <div className={styles.container}>
        {spotlights.map(spotlight => {
          return (
            <div className={styles.item}>
              <div className={`${styles.img} ${styles.imgContainer}`}>
                {spotlight.image && (
                  <Image
                    className={styles.img}
                    src={urlFor(spotlight.image)
                    .width(500)
                    .height(500)
                    .url()}
                    height='188px'
                    width='188px'
                    quality='100'
                  />
                )}
              </div>
              <span className={styles.name}>{spotlight.name}</span>
              <span className={styles.small}>{spotlight.subline}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Spotlight
