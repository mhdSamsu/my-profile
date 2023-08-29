import React, { useState } from 'react'
import classNames from 'classnames';

import './skill.scss'
import { SkillRate } from '../../sub-component/SubComponent';

const Skill = () => {
  const[activeTab, setActiveTab] = useState('backend');
  const skills = [
    {
      name:'JavaScript',
      star:2.5
    },
    {
      name:'NodeJs',
      star:2
    },
    {
      name:'React',
      star:2
    },
    {
      name:'MongoDB',
      star:3
    },
    {
      name:'SASS/SCSS',
      star:2
    },
    {
      name:'DigitalOcean',
      star:3
    },
  ]
  
  return (
    <section className='skills'>
       <h3 className='skills__title'>Skills</h3>

        <ul className="skills__content">
          {
          skills.map(({name,star},idx) =>
            <li className='skills__content__skill' key={idx}>
              <SkillRate name={name} star={star} />
            </li>
          )
          }
        </ul>
    </section>
  )
}

export default Skill