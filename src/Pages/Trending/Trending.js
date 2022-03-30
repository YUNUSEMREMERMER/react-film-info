import React from 'react'
import SingleContent from '../../components/SingleContent/SingleContent'
import "./Trending.css"

function Trending() {
  return (
    <div>
        <span className='pageTitle'>Trending</span>
        <div className='trending'>
          <SingleContent key={1} id={1} poster="https://www.movienewz.com/img/films/poster-holder.jpg" title="film" date="11/11/11" media_type="movie" />
          <SingleContent key={2} id={2} poster="https://www.movienewz.com/img/films/poster-holder.jpg" title="film" date="11/11/11" media_type="movie" />
          <SingleContent key={3} id={3} poster="https://www.movienewz.com/img/films/poster-holder.jpg" title="film" date="11/11/11" media_type="movie" />
          <SingleContent key={4} id={4} poster="https://www.movienewz.com/img/films/poster-holder.jpg" title="film" date="11/11/11" media_type="movie" />
          <SingleContent key={5} id={5} poster="https://www.movienewz.com/img/films/poster-holder.jpg" title="film" date="11/11/11" media_type="movie" />
          <SingleContent key={1} id={1} poster="https://www.movienewz.com/img/films/poster-holder.jpg" title="film" date="11/11/11" media_type="movie" />
          <SingleContent key={2} id={2} poster="https://www.movienewz.com/img/films/poster-holder.jpg" title="film" date="11/11/11" media_type="movie" />
          <SingleContent key={3} id={3} poster="https://www.movienewz.com/img/films/poster-holder.jpg" title="film" date="11/11/11" media_type="movie" />
          <SingleContent key={4} id={4} poster="https://www.movienewz.com/img/films/poster-holder.jpg" title="film" date="11/11/11" media_type="movie" />
          <SingleContent key={5} id={5} poster="https://www.movienewz.com/img/films/poster-holder.jpg" title="film" date="11/11/11" media_type="movie" />


        </div>
    </div>
  )
}

export default Trending