import React, { useContext } from 'react';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import CommonStyle from "./Common.module.scss";
import { trimStr } from '../../utils/helper-function';
import GlobalContext from '../../context/GlobalContext';

const Cards = (props) => {
    const { dispatch, movieData, setModalState, setWatchList } = useContext(GlobalContext);
    const { posterImage, title, rating, id, status } = props;

    const addToWatchList = (id) => {
        movieData.map((movie) => {
            if (movie.mal_id === id) {
                movie.airing = true;
                dispatch({ type: 'add', payload: movie })
            }
        })
    }

    return (
        <section className={CommonStyle.card}>
            <img src={posterImage} alt={title} />
            <div className={CommonStyle.card_details}>
                <div className={CommonStyle.title}>{trimStr(title, 15, '')}</div>
                <div className={CommonStyle.rating}>Rating: {rating}</div>
                {!status ? <PlaylistAddIcon className={CommonStyle.addList} onClick={() => addToWatchList(id)} />
                    : <RemoveCircleOutlineIcon style={{ color: 'red' }} className={CommonStyle.addList} onClick={() => {
                        setModalState(true)
                        setWatchList(id)
                    }} />}
            </div>
        </section>
    )
}

export default Cards;