import MovieCard from "./MovieCard";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

function MovieScreen({
  movieList,
  page,
  setPage,
  list,
  addMovie,
  removeMovie,
}) {
  const movieDisplay = movieList.map((movie, index) => {
    return (
      <MovieCard
        movie={movie}
        addMovie={addMovie}
        removeMovie={removeMovie}
        list={list}
      />
    );
  });
  const decrementHandler = () => {
    setPage(page - 1);
  };

  const incrementHandler = () => {
    setPage(page + 1);
  };
  return (
    <div className="page">
      <h1>Christina's Movie Theatre</h1>
      <h3>Add a movie to your watchlist!</h3>
      <div className="btn-container">
        <button onClick={page !== 1 && decrementHandler}>
          <HiArrowLeft />
          {/* Previous */}
        </button>
        <button onClick={incrementHandler}>
            {/* Next */}
            <HiArrowRight/>
        </button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
}
export default MovieScreen;
