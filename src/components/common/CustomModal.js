import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';


import CommonStyle from "./Common.module.scss";

const CustomModal = (props) => {
    const { setModalState, watchList, dispatch, movieData } = useContext(GlobalContext);
    const { message } = props;

    const removeFormWatchList = () => {
        movieData.map((movie) => {
            if (movie.mal_id === watchList) {
                movie.airing = false
            }
        })
        dispatch({ type: 'remove', payload: watchList })
    }

    return (
        <main className={CommonStyle.Modal_container} onClick={() => { setModalState(false) }}>
            <section className={CommonStyle.Modal}>
                <p>{message}</p>
                <div className={CommonStyle.Modal_footer}>
                    <button className={CommonStyle.btn_cancel} onClick={() => { setModalState(false) }}>Cancel</button>
                    <button className={CommonStyle.btn_ok} onClick={(evt) => {
                        removeFormWatchList()
                    }}>Ok</button>
                </div>
            </section>
        </main>
    )
}

export default CustomModal