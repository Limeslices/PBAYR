import Image from 'next/image'
import styles from '../styles/Divider.module.scss'
import React from 'react'

const Divider = ({stats}) => {
  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.container}>
        {stats.map((stat, index) => {
          return (
            <div className={styles.section__item} key={index}>
            <span className={styles.leading}>
              <div className={styles.imgSpacing}>
                <Image
                  className={styles.imgSpacing}
                  src={`/static/${index + 1}.svg`}
                  width='33px'
                  height='33px'
                />
              </div>
              {stat.stat}
            </span>
            <span className={styles.trailing}>{stat.subtitle}</span>
          </div>
          )
        })}
        </div>
      </section>
      <div className={styles.img}>
        <Image
          src='/static/tilt.svg'
          width='1366px'
          height='120px'
          layout='responsive'
        />
      </div>
    </>
  )
}

export default Divider
