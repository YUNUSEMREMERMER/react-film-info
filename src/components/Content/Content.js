import { Container } from '@mui/material'
import React from 'react'
import './Content.css'
import { Routes, Route } from "react-router-dom";
import Trending from "../../Pages/Trending/Trending";
import Movies from "../../Pages/Movies/Movies";
import Series from "../../Pages/Series/Series";
import Search from "../../Pages/Search/Search";



function Content() {
  return (
    <div className='content'>
      
      <Container>
        <Routes>
          <Route path="/" element={<Trending />} exact />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Container>
    </div>
  )
}

export default Content