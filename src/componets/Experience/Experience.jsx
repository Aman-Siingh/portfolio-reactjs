import React from 'react'
import skills from "../../data/skills.json";
import { getImageUrl } from '../../utils';


export default function Experience() {
  return(
    <section id='experince'>
      <h2>Experience</h2>
      <div>
        <div>
          {skills.map((skill,id)=> {
            return (<div key={id}>
              <div>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}
