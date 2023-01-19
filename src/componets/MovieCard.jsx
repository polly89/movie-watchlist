import {useState} from 'react'
import { HiPlus, HiMinus } from "react-icons/hi";

function MovieCard({ movie, addMovie, removeMovie, list }) {
  const [clicks, setClicks] = useState(0);
  
  const clickHandlerAdd = (e) => {
    addMovie(movie);
  };
  const clickHandlerRemove = (e) => {
    removeMovie(movie);
  };

  const clickHandleHeart = () => {
    setClicks(clicks +1)
  }
  const inWatchlist = list.filter((mov) => {
    return mov.id === movie.id;
  });
  const button =
    inWatchlist.length === 0 ? (
      <button onClick={clickHandlerAdd}><HiPlus /></button>
    ) : (
      <button onClick={clickHandlerRemove}> <HiMinus /></button>
    );


  return (
    <div className="movie-card">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="Movie cover"
        />
        <img className="heart"
        onClick={clickHandleHeart}
        alt='heart'
        src='https://www.freeiconspng.com/thumbs/heart-png/valentine-red-heart-png-15.png'
        style={{width: 10 + 10 * clicks + 'px', position: 'absolute', marginLeft: '-150px', marginTop:'10px'}}
        />
        
        <h3>{movie.originl_title}</h3>
      </div>
      {button}
    </div>
  );
}
export default MovieCard;
