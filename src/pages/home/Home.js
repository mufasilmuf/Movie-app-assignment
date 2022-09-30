import React, { useContext } from 'react';

import Cards from '../../components/common/Cards';
import Filter from '../../components/common/Filter';
import SearchBar from '../../components/common/SearchBar';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import Loader from "../../components/common/Loader";
import GlobalContext from '../../context/GlobalContext';
import CustomModal from '../../components/common/CustomModal';
import { isEmpty } from 'lodash';

const Home = () => {
    const { filterMovieData, loader, geners, modalState } = useContext(GlobalContext);

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
                {isEmpty(filterMovieData) && !loader ? <p className='empty-message'>Result Not Found!</p> :
                    <div className='home-section'>
                        {filterMovieData.map((movie, index) => (
                            <Cards posterImage={movie.images.webp.image_url} title={movie.title} rating={movie.score} id={movie.mal_id} status={movie.airing} key={index} />
                        ))}
                    </div>
                }
            </section>
            {modalState && <CustomModal message="You like to remove this Movie form Watch List" />}
        </React.Fragment>
    )
}

export default Home