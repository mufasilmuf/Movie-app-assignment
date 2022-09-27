import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from '../../components/common/Cards';
import SearchBar from '../../components/common/SearchBar';

import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';

const Home = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        axios.get('https://api.jikan.moe/v4/anime')
            .then((response) => {
                setMovieList(response.data.data);
            })
    }, []);

    return (
        <React.Fragment>
            <Header />
            <Navbar />
            <section className='container'>
                <div className='home-section'>
                    {movieList.map((movie) => (
                        <Cards posterImage={movie.images.webp.image_url} title={movie.title} rating={movie.score} />
                    ))}
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home