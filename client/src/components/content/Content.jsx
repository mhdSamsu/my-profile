import React, { useState } from 'react';
import classNames from 'classnames'

import Skill from './skill/Skill';
import Project from './project/Project';

import './content.scss';

const Content = () => {
    const [activeTab, setActiveTab] = useState('Skill');

    const changeTab = (tab) => setActiveTab(tab);

  return (
    <section className='content'>
       <div className="content__project">
        <Project />
       </div>
       <div className="content__skill">
        <Skill />
       </div>
    </section>
  )
}

export default Content