import { Search } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import GlobalContext from '../../context/GlobalContext';

import CommonStyle from "./Common.module.scss";

const SearchBar = (props) => {
    const { movieData, setFilterMovieData } = useContext(GlobalContext);
    const { name } = props;

    const [searchMovie, setSearchMovie] = useState([]);

    const movieSearch = (e) => {
        e.preventDefault();
        let filterMovie = [];
        movieData.map((movie) => {
            if (movie.title.toLowerCase().includes(searchMovie.toLowerCase())) {
                filterMovie.push(movie)
            }
        })
        setFilterMovieData(filterMovie);
    };

    return (
        <section className={CommonStyle.SearchBar}>
            <form onSubmit={movieSearch}>
                <input type="text" placeholder={name} className="form-control" onChange={(e) => {
                    setSearchMovie(e.target.value)
                    if (e.target.value === "") { setFilterMovieData(movieData) }
                }} />
                <button type='sumbmit'><Search className={CommonStyle.searchIcon} /></button>
            </form>
        </section>
    )
}

export default SearchBar;