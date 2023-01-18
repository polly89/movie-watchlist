import { useEffect, useState } from 'react';
import Header from "./componets/Header";
import MovieScreen from './componets/MovieScreen';
import axios from 'axios';

function App(){
    const[movieList, setMovieList] = useState([])
    const[watchlist, setWatchlist] = useState([])
    const[page, setPage] = useState('1')

    const getData = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/76341?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                console.log(response.data.results);
                setMovieList(response.data.results);
            });
    };

    useEffect(()=> {
        getData();
    }, [page]);

    return (
        <div>
            <Header />
            <main>
                <MovieScreen 
                movieList={movieList}
                page={page}
                setPage={setPage}
                // list={list}    
                />
            </main>
        </div>
    )
}

export default App;