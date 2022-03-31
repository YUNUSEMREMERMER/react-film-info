import axios from 'axios';
import React,{useState, useEffect} from 'react'
import CustomPagination from '../../components/Pagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent'
import "./Movies.css"

function Movies() {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchMovies = async() => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
    setContent(data.results);
    setNumOfPages(data.total_pages);  

  };

  useEffect(() => {
    fetchMovies();
    //eslint-disable-next-line
  }, [page]);

  return (
    <div>
        <span className='pageTitle'>Movies</span>
        <div className='movies'>
        {
          content && content.map((c) => (
            <SingleContent 
              key={c.id} id={c.id} 
              poster={c.poster_path} title={c.title || c.name} 
              date={c.first_air_date || c.release_date} 
              media_type="movie" 
              vote_average={c.vote_average} />
          ))
        }
      </div>
      <CustomPagination setPage={setPage} numOfPages={500}/>
    </div>
  )
}

export default Movies