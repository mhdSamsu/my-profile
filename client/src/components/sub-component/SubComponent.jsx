import React from 'react'
import PropTypes from 'prop-types'

import './sub-component.scss'

const SocialImage = ({title,src,url}) =>{
    return(
        <span title={title}><a href={url} target="_blank" rel="noreferrer"><img className='socialImage' src={src} alt={src}/></a></span>
    )
}

export {
    SocialImage
}