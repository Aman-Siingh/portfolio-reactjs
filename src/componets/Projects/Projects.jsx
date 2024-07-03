import React from 'react'
import projects from "../../data/project.json"
import { ProjectCard } from './ProjectCard'

export default function Projects() {
  return (
    <section>
        <h1>Projects</h1>
        <div>
            {
                projects.map((project,id) => {
                    return <ProjectCard key={id} project={project}/>
                })
            }
        </div>
    </section>
  )
}
