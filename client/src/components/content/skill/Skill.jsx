import React, { useState } from 'react'
import classNames from 'classnames';

import './skill.scss'

const Skill = () => {
  const[activeTab, setActiveTab] = useState('backend');
  const skills = {
    backend:[
      'Skilled MERN stack developer to design, develop and deploy web applications using Node JS, MongoDB, Express JS and React JS.',
      ' Expertise in modular and DRY programming that does bring well structured, robust, readable code helps easy to understand and debug.',
       'Adept in http methods GET, POST, PUT, PATCH and DELETE and exactly know where to use.',
       'Skillful in constructing resourceful APIs with Express JS framework in Node environment.', 
       'Adequate knowledge in integrating external APIs and flawlessly handling and storing response data in proper manner.',
       'Proficient in validating in-coming JSON request using AJV validation.',
       'Expertise in querying Mongo DB’s basic CRUD to project required information.',
       'Solid understanding of query, projection, and update operators for MongoDB.',
       'Good Knowledge in project records by looking up multiple collections using aggregate.',
       'Basic Knowledge in running series of operations including read and write using MongoDB session transaction.',
       'Expertise in creating a logical view of database schema using mongoose framework.',
       'Proficient in developing unit tests for methods and APIs using the Jasmine framework', 
    ],
    frontend:[
      'Good knowledge in developing responsive UI components using the React JS framework.',
      'Good in creating responsive User Interfaces.',
      'Expert in defining the structure of User Interface (UI) using CSS Flex layout.',
      'Good Understanding in CSS units pixels, em, rem, percentage, vh.',
      'Noble knowledge in CSS animation and transition.', 
    ],
    other:[
      'Good knowledge of a version control system like Git and its basic commands.',
      'Expertise in an Internet hosting service like GitHub for creating repositories, and branches, making commits, merge pull requests, and reviewing.',
      'Basic understanding of Docker to build an image of a web application in the node: 16-alpine image layer.',
      'Sufficient understanding on Digital ocean cloud space and can do basic operations like putting, getting, and deleting objects through code.',
      'Sufficient understanding on Digital ocean cloud service to maintain deployment.',
      'Basic understanding in Web scraping to obtain large amounts of data from websites and store as usable information.',
      'Know how to write API documentation using Swagger.',
      'Decent Knowledge in drafting, analyzing and documenting use cases effectively.',
      'Good knowledge in writing stories by projects requirements.', 
      'Basic understanding of agile methodology.',
    ]
  }
    const changeTab = (tab) => setActiveTab(tab)
  return (
    <section className='skills'>
      <div className="skills__tabs">
        {
          Object.keys(skills).map((el) => 
            <span className={classNames('tab', activeTab === el && 'active')} key={el} onClick={()=> changeTab(el)}>{el}</span>
          )
        }
      </div>
        <ul className="skills__content">
          {
          skills[activeTab].map((skill,idx) =>
            <li className='skills__content__skill' key={idx}>{skill}</li>
          )
          }
        </ul>
    </section>
  )
}

export default Skill