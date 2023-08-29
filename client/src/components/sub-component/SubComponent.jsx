import React from 'react'
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';

import './sub-component.scss'

const SocialImage = ({title,src,url}) =>{
    return(
        <span title={title}><a href={url} target="_blank" rel="noreferrer"><img className='socialImage' src={src} alt={src}/></a></span>
    )
}


const SkillRate = ({name, star}) =>{
    return(
        <div className="skillRate">
            <p className='skillRate__name' title={name}>{name}</p>
            <p  className='skillRate__star' title={`${star}star`}><Rating name="size-small" defaultValue={star} precision={0.5} size="sm" readOnly/></p>
        </div>
    )
}
export {
    SocialImage,
    SkillRate
}