import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

export default function About() {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>ABOUT</h2>
      <div className={styles.content}>
          <img src={getImageUrl("about/laptop.png")} alt="About Image" className={styles.aboutImg} />
          <ul className={styles.skillSection}>
            <li className={styles.skill}>
              <img src={getImageUrl("about/cursorIcon.png")} alt="cursor image" />
              <sub className={styles.skillDetail}>
                <h3>Front-end Developer</h3>
                <p>I'm a Frontend Developer with expirence </p>
              </sub>
            </li>
            <li className={styles.skill}>
              <img src={getImageUrl("about/serverIcon.png")} alt="" />
              <sub className={styles.skillDetail}>
                <h3>Back-end Developer</h3>
                <p>I'm a Backend Developer with expirence </p>
              </sub>
            </li>
            <li className={styles.skill}>
              <img src={getImageUrl("about/uiIcon.png")} alt="" />
              <sub className={styles.skillDetail}>
                <h3>Back-end Developer</h3>
                <p>I'm a Backend Developer with expirence </p>
              </sub>
            </li>
          </ul>
      </div>
    </section>
  )
}
