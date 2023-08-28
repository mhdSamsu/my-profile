import React from 'react'

import './project.scss'
import { SocialImage } from '../../sub-component/SubComponent'

const Project = () => {
  const projects = [
    {
      logo:'./images/ryrc_logo.png',
      name:'Rajavalli Rajiv',
      link:'https://rajavallirajiv.com/',
      designation: 'Full Stack Web Developer',
      details:[
        `After 6 months training, this my first project. I begin my career as Team Lead.
        As a team lead, led the team in an amicable manner for the completion of project in the stipulated time frame,
        participated in various meeting like project planning & scheduling discussions, 
        Understood the project requirements and wrote stories based on that, Drafted coding standards, 
        Documented and organized Project life cycle’s documentation.`,
        `As a developer, built secured APIs that validate inbound data by the JSON schema using the AJV schema validator.
        Aggregated records from multiple collections and sent structured information, that’s easy to handle.
        And documented API details using swagger API Documentation.'`,
        `Developed automated notification system.That notify through portal and send whatsApp for triggered events like booking rejected and approved.
        At the same time also working on non-triggered events like feedback reminder and course reminder.
        For sending whatsApp message used WhatsAPP Cloud API and for scheduled events used node-cron. `,
        `Built some UI components.For example, list out booking detail as drop-down card.Each card has two functionality.
        One Reject the booking and another one approve a booking.`,
        'In deployment side, created three different environments are Local, Stage and Production and maintained.',


      ]
    }
  ]
  return (
    <section className="projects">
      <h3 className='projects__title'>Projects</h3>
      {
        projects.map((el,idx)=>
          <div className="project" key={idx}>
           <div className="project__heading">
           <div className="project__heading__projectName">
              <SocialImage title={el.name} src={el.logo} url={el.link} />
              <a className='project__heading__projectName__link' href={el.link} target="_blank" rel="noreferrer" > {el.name}</a><br />
           </div>
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