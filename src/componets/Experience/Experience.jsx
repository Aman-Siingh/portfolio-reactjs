import React from 'react'
import skills from "../../data/skills.json";
import { getImageUrl } from '../../utils';


export default function Experience() {
  return (
    <section>
      <div>
        <ul>
          {skills.map(skill, id) => {
            return <div key={id}>
                  <img src={getImageUrl(skills.imageSrc)} alt={skills.title}/>
            </div>
          }}
        </ul>
      </div>
    </section>
  )
}
