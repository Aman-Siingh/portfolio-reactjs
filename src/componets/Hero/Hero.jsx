import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css';
export default function Hero() {
  return (
    <section>
        <div>
            <h1>I'm Aman Singh</h1>
            <p>
                I am a Passinate Software Development Student.
            </p>
            <a href="mailto: amansiingh15@gmail.com">Contact Me</a>
            <img src={getImageUrl("hero/heroImage.png")} alt="My Profile Image" />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </div>
    </section>
  )
}
