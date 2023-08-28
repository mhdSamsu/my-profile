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
        <div className="content__howI">
          <div className="content__howI__tabs">
              <p className={classNames('tab', activeTab === 'Skill' && 'active')} onClick={()=>changeTab('Skill')}>Skill</p>
              <p className={classNames('tab', activeTab === 'Project' && 'active')} onClick={()=>changeTab('Project')}>Project</p>
          </div>

          {activeTab === 'Skill' && <Skill/>}
          {activeTab === 'Project' && <Project/>}
        </div>
        <div className="content__contact">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis praesentium consequuntur nobis, neque inventore accusantium esse commodi dicta aut cumque hic nam accusamus quis beatae consequatur facilis culpa ducimus provident!
        </div>
    </section>
  )
}

export default Content