import React from 'react'
import PropTypes from 'prop-types'

import './intro.scss'

const Intro = props => {
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
                <p className='intro__content__bio__content'>I am a passionate developer.&nbsp;More than passionate, I try do everything with love.&nbsp;Love make every hard task into easy take and give joyful Satisfaction.
                </p>
            </div>
        </div>
    </section>
  )
}

Intro.propTypes = {}

export default Intro