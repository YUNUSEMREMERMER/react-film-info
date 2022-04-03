
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {  Button, TextField } from '@mui/material';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Search() {


  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  return (
    <div>
        <ThemeProvider theme={darkTheme}>
          <div style={{display: "flex", margin:"15px 0"}}>
            <TextField 
            style={{flex:1}}
            className="searchbox"
            label="search"
            variant='filled'
            //onChange={(e) => setSearchText(e.target.value)}
          />

            <Button variant='contained' style={{marginLeft:10}}>
              <SearchIcon />
            </Button>
          </div>
          
          

        </ThemeProvider>
        
        
          
        
    </div>
  )
}

export default Search