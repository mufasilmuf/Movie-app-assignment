import React, { useContext } from 'react';
import Cards from '../../components/common/Cards';

import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import GlobalContext from '../../context/GlobalContext';
import CustomModal from '../../components/common/CustomModal';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';

const WatchList = () => {
    const { addList, modalState } = useContext(GlobalContext);

    return (
        <React.Fragment>
            <Header />
            <Navbar />
            <section className='container list-section'>
                <h4>Watch List</h4>
                {isEmpty(addList) ? <div >
                    <p className='empty-message'>Your List Empty !</p>
                    <Link to='/'><p>Go Back to Home</p></Link>
                </div> :
                    <div className='home-section'>
                        {addList.map((movie, index) => (
                            <Cards key={index} posterImage={movie.images.webp.image_url} title={movie.title} rating={movie.score} id={movie.mal_id} status={movie.airing} />
                        ))}
                    </div>
                }
            </section>
            {modalState && <CustomModal message="You like to remove this Movie form Watch List" />}
        </React.Fragment>
    )
}

export default WatchList;