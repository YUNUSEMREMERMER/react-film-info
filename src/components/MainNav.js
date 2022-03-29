import React,{ useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';               
import { MovieCreation, SearchOutlined } from '@material-ui/icons';
import TvIcon from '@material-ui/icons/Tv';

import { useNavigate  } from "react-router-dom"
import { maxWidth } from '@mui/system';

const useStyles = makeStyles({
  root: {
    width: maxWidth,
    position:"fixed",
    bottom:0,
    backgroundColor:"#2d313a",
    zIndex:100
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate ();

  useEffect(() => {
    if(value === 0){
      navigate("/", { replace: true })
    }
    else if(value === 1){
      navigate("/movies", { replace: true })
    }
    else if(value === 2){
      navigate("/series", { replace: true })
    }
    else if(value === 3){
      navigate("/search", { replace: true })
    }
  },[value]);

  return ( 
      
      <BottomNavigation
      style={{width:"100%"}}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      >
        <BottomNavigationAction style={{color:"white" }} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{color:"white" }} label="Movies" icon={<MovieCreation />} />
        <BottomNavigationAction style={{color:"white" }} label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction style={{color:"white" }} label="Search" icon={<SearchOutlined />} />
      </BottomNavigation>
      

      

    
    
  );
}
