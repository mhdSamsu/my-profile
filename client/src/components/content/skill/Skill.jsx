import React, { useState } from 'react'
import classNames from 'classnames';

import './skill.scss'

const Skill = () => {
  const[activeTab, setActiveTab] = useState('backend');
  const skills = [
    {
      name:'Javascript',
      star:'4 star ***********************************'
    },
    {
      name:'Javascript',
      star:'4 star ***********************************'
    },
    {
      name:'Javascript',
      star:'4 star ***********************************'
    },
    {
      name:'Javascript',
      star:'4 star ***********************************'
    },
    {
      name:'Javascript',
      star:'4 star ***********************************'
    },
    {
      name:'Javascript',
      star:'4 star ***********************************'
    },
    {
      name:'Javascript',
      star:'4 star ***********************************'
    }
  ]
    const changeTab = (tab) => setActiveTab(tab)
  return (
    <section className='skills'>
       <h3 className='skills__title'>Skills</h3>

        <ul className="skills__content">
          {
          skills.map(({name,star},idx) =>
            <li className='skills__content__skill' key={idx}>
              <span title={name}>{name}</span>
              <span title={star}>{star}</span>
            </li>
          )
          }
        </ul>
    </section>
  )
}

export default Skill