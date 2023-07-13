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
        <div className="content__tabs">
            <p className={classNames('tab', activeTab === 'Skill' && 'active')} onClick={()=>changeTab('Skill')}>Skill</p>
            <p className={classNames('tab', activeTab === 'Project' && 'active')} onClick={()=>changeTab('Project')}>Project</p>
        </div>

        {activeTab === 'Skill' && <Skill/>}
        {activeTab === 'Project' && <Project/>}
    </section>
  )
}

export default Content