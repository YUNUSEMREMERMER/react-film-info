
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {  Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import axios from 'axios';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';
import "./Search.css";

function Search() {

  const [value, setValue] = useState('one');
  const [page, setPage] = useState();
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPage(1);
  };


  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const fetchSearch = async() => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/${value === "two" ? "tv" : "movie"}?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US&query=${searchText}&page=${page}&include_adult=false`);

    setContent(data.results);
    setNumOfPages(data.total_pages);
  }

  useEffect(() => {
    window.scroll(0, 0);
    searchText && fetchSearch();
    // eslint-disable-next-line
  },[value, page])

  return (
    <div >
        <ThemeProvider theme={darkTheme}>
          <div className="search">
            <TextField 
            style={{flex:1}}
            className="searchbox"
            label="search"
            variant='filled'
            onChange={(e) => setSearchText(e.target.value)}
          />

            <Button variant='contained' style={{marginLeft:10}} onClick={fetchSearch}>
              <SearchIcon />
            </Button>
          </div>

          <Box sx={{ width: '100%' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example" 
              style={{ paddingBottom: 5 }}
              centered
            >
              <Tab
              sx={{ width: '100%' }}
                value="one"
                label="SEARCH MOVIES"
                wrapped
              />
              <Tab sx={{ width: '100%' }} value="two" label="SEARCH TV SERIES" />
            
            </Tabs>
          </Box>

        </ThemeProvider>

        <div className="trending">
          {content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={value === "two" ? "tv" : "movie"}
                vote_average={c.vote_average}
              />
            ))}
          {searchText && (!content && (value === "two" ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>))}
        </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}

        
    
    </div>
  )
}

export default Search