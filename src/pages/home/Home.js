import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

import Cards from '../../components/common/Cards';
import Filter from '../../components/common/Filter';
import SearchBar from '../../components/common/SearchBar';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import Loader from "../../components/common/Loader";
import GlobalContext from '../../context/GlobalContext';

const Home = () => {
    const { movieData, loader, geners } = useContext(GlobalContext);

    return (
        <React.Fragment>
            <Header />
            <Navbar />
            <section className='container'>
                <div className='home-option'>
                    <SearchBar name="Search your froviate animes" />
                    <Filter name='filter by genres' option={geners} />
                </div>
                {loader && <Loader />}
                <div className='home-section'>
                    {movieData.map((movie) => (
                        <Cards posterImage={movie.images.webp.image_url} title={movie.title} rating={movie.score} />
                    ))}
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home