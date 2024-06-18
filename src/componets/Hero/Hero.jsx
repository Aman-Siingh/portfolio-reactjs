import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css';
export default function Hero() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>I'm Aman Singh</h1>
            <p className={styles.description}>
                I am a Passinate Software Development Student.
            </p>
            <a href="mailto: amansiingh15@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="My Profile Image"className={styles.heroImg} />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

    </section>
  )
}
