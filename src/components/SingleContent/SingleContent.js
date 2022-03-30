import { Badge } from '@mui/material'
import React from 'react'
import "./SingleContent.css"

function SingleContent({id,poster,title,date,media_type}) {
  return (
    <div className='media'>
        <Badge badgeContent={20} color="primary" />
        <img className='poster' src={poster} alt="" />
        <b className='title'>{title}</b>
        <span className='subTitle'>
            {media_type}
            <span className='subTitle'>{date}</span>
        </span>
    </div>
  )
}

export default SingleContent