import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

export default function About() {
  return (
    <section className={styles.container}>
      <sub className={styles.subSection}>
      <h1 className={styles.title}>ABOUT</h1>
      <img src={getImageUrl("about/aboutImage.png")} alt="About Image" className={styles.aboutImg} />
      <div className={styles.content}>
          <ul className={styles.skillSection}>
            <li className={styles.skill}>
              <img src={getImageUrl("about/cursorIcon.png")} alt="" />
              <h3>Front-end Developer</h3>
              <p>I'm a Frontend Developer with expirence </p>
            </li>
            <li className={styles.skill}>
              <img src={getImageUrl("about/serverIcon.png")} alt="" />
              <h3>Back-end Developer</h3>
              <p>I'm a Backend Developer with expirence </p>
            </li>
          </ul>
      </div>
      </sub>
    </section>
  )
}
