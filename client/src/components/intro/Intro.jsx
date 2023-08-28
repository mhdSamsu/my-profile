import React from 'react'
import PropTypes from 'prop-types'

import './intro.scss'
import { SocialImage } from '../sub-component/SubComponent'

const Intro = () => {
    const contactDetail =[
        {
            title:'Mohammed Samsuthin',
            src:'/images/linkedIn.png',
            url:'https://www.linkedin.com/in/mohammed-samsuthin-087b31214'
        },
        {
            title:'Samsuthin-Kaavian',
            src:'/images/gitHub.png',
            url:'https://github.com/Samsuthin-Kaavian'
        },
        {
            title:'mohammedsamsuthin432@gmail.com',
            src:'/images/mail.png',
            url:'mailto:mohammedsamsuthin432@gmail.com'
        }
    ]
  return (
    <section className='intro'>
        <div className='intro__img-container'>
            <img className='intro__img-container__my-pic' src="/images/my-pic.png" alt="my pic" />
        </div>
        <div className='intro__content'>
            <div className='intro__content__me'>
                <p className='intro__content__me__name'>Mohammed Samsuthin</p>
                <p className='intro__content__me__whatI'>Fullstack Web Developer</p>
            </div>
            <div className="intro__content__bio">
                <p id='quote'>"What is done in love is done well."</p>
                <p className='intro__content__bio__content'>
                    I am a passionate developer.&nbsp;More than passionate, I try do everything with love.
                    &nbsp;Love make every hard task into easy take and give joyful satisfaction.I can do everything.
                    If I don't know, I make mistake and learn.
                </p>
                <div className="intro__content__bio__findMe">
                    <ul className='intro__content__bio__findMe__links'>
                       {
                        contactDetail.map(({title,src,url}) => <li className='intro__content__bio__findMe__links__link'><SocialImage title={title} src={src} url={url} /></li>)
                       }
                    </ul>

                    <div className="intro__content__bio__findMe__location">
                        <img className='intro__content__bio__findMe__location__img' src="/images/location.png" alt="" />
                        <p>TamilNadu, India</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Intro