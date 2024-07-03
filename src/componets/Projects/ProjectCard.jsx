import React from 'react'
import { getImageUrl } from '../../utils'



export default function ProjectCard( {project : { imageSrc, description, title, demo, source, skills }}) {
  return (
    <div>
                            <img src={getImageUrl(imageSrc)} alt={`${title} Image`} />
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <ul>
                                {
                                    skills.map((skill,id) => {
                                        return <li key={id}>
                                            {skill}
                                        </li>
                                    })
                                }
                            </ul>
                            <div>
                                <a href={demo}>Demo</a>
                                <a href={source}>Source</a>
                            </div>
                        </div>
  )
}
