import React from 'react'
import skills from "../../data/skills.json";
import history from "../../data/history.json"
import { getImageUrl } from '../../utils';
import styles from "./Experience.module.css";


export default function Experience() {
  return(
    <section id='experince' className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill,id)=> {
            return (<div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} className={styles.skillImage} />
              </div>
              <p className={styles.skillTittle}>{skill.title}</p>
              </div>
          )})}
        </div>
        <ul className={styles.history}>
          {history.map((hisotryItem,id)=>{
            return <li key={id} className={styles.historyItem}>
              <img src={getImageUrl(hisotryItem.imageSrc)} alt={`${hisotryItem.organisation}'s Logo`} />
              <div className={styles.hisotryItemDetails}>
                <h3>{hisotryItem.role},{hisotryItem.organisation}</h3>
                <p>{hisotryItem.startDate}--{hisotryItem.endDate}</p>
                <ul>
                    {hisotryItem.experiences.map((experience,id)=>{
                      return <li key={id}>
                        {experience}
                      </li>
                    })}
                </ul>
              </div>
            </li>
          })}
        </ul>
      </div>
    </section>
  )
}
