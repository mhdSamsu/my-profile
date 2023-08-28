import React from 'react'

import './project.scss'

const Project = () => {
  const projects = [
    {
      name:'RYRC Website and Web Portal',
      link:'https://rajavallirajiv.com/',
      designation: 'Full Stack Web Developer',
      details:[
        'As a team lead, led the team in an amicable manner for the completion of project in the stipulated time frame.',
        'Conducted and participated in project planning & scheduling discussions.',
        'Understood the project requirements and wrote stories based on that.',
        'Built effective flawless APIs for the project functional requirements.',
        'Documented and organized Project life cycle’s documentation.', 
        'Validated inbound data by the JSON schema using the AJV schema validator.',
        'Drafted coding standard and gave detailed orientation to team members.',
        'Documented API details using swagger API Documentation.',

      ]
    }
  ]
  return (
    <section className="projects">
      {
        projects.map((el,idx)=>
          <div className="project" key={idx}>
           <div className="project__heading">
              <a className='project__heading__name' href={el.link}>{el.name}</a><br />
              <p className='project__heading__designation'>{el.designation}</p>
           </div>
           
            <ul className="project__content">
              {
                el.details.map((el,idx)=>
                  <li className="project__content__detail" key={idx}>
                    {el}
                  </li>
                )
              }
            </ul>
            
          </div>
        )
      }
    </section>
  )
}

export default Project