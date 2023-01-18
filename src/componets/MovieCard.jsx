function MovieCard({movie, addMovie}){
    const clickHandler = (e)=>{
        addMovie(movie)
    }
    return (
    <div className="movie-card">
        <div>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='Movie cover' />
            <h3>{movie.originl_title}</h3>
        </div>
        <button onClick={clickHandler}>Add to List</button>
    </div>
    )
}
export default MovieCard;