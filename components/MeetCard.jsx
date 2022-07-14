import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/MeetCard.module.scss'

const MeetCard = () => {
  return (
    <section className={styles.card}>
      <div className={`${styles.imgCover} ${styles.img} imgMeet`}>
        <Image
          className={styles.imgCover}
          src='/static/person.png'
          width='416px'
          height='426px'
        />
      </div>
      <div className={styles.content}>
        <div className={styles.content__inner}>
          <h1 className={styles.leading}>Meet the Founder</h1>
          <span className={styles.trailing}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et"
          </span>
          <span className={styles.trailingBold}>
            <Link href='/founder'>
              <a className={styles.link}>Read More</a>
            </Link>
          </span>
        </div>
      </div>
    </section>
  )
}

export default MeetCard
