import React from 'react'
import projects from "../../data/project.json"
import { ProjectCard } from './ProjectCard.jsx'
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.container} id='projects'>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.projects}>
            {
                projects.map((project,id) => {
                    return <ProjectCard key={id} project={project}/>
                })
            }
            
        </div>
    </section>
  )
}
