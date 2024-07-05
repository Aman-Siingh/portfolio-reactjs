import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <section className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href='mailto: amansiingh@gmail.com'>amansiingh@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
                <a href='https://in.linkedin.com/in/amansingh15'>linkedin.com/amansingh15</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                <a href='https://github.com/Aman-Siingh'>github.com/Aman-Siingh</a>
            </li>
        </ul>
    </section>
  )
}
