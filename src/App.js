import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./componets/Header";
import MovieScreen from "./componets/MovieScreen";
import Watchlist from "./componets/Watchlist";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [list, setList] = useState([]); // changed from [watchlist, setWatchlist] after part 4 section 4
  const [page, setPage] = useState(1);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((response) => {
        console.log(response.data.results);
        setMovieList(response.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  const addMovie = (movie) => {
    setList([...list, movie]);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          movieList={movieList}
          page={page}
          setPage={setPage}
          list={list}
          addMovie={addMovie}
        />
        <Watchlist list={list} />
      </main>
    </div>
  );
}

export default App;
