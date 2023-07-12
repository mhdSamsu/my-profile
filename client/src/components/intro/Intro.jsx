import React from 'react'
import PropTypes from 'prop-types'

import './intro.scss'

const Intro = props => {
  return (
    <section className='intro'>
        <div className='intro__img-container'>
            <img className='intro__img-container__my-pic' src="/images/my-pic.png" alt="" />
        </div>
        <div className='intro__content'>
            <div className="intro__content__quote">
                <p>"What is done in love is done well."</p>
            </div>
            <div className="intro__content__whatI">
                <p>Mohammed Samsuthin</p>
                <p>Fullstack Web Developer</p>
            </div>
        </div>
    </section>
  )
}

Intro.propTypes = {}

export default Intro