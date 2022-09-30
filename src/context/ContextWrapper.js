import React, { useEffect, useReducer, useState } from 'react';

import GlobalContext from './GlobalContext';
import { addToList, initList } from './Reducer';

const ContextWrapper = (props) => {
    const [movieData, setMovieData] = useState([]);
    const [filterMovieData, setFilterMovieData] = useState([])
    const [loader, setLoader] = useState([]);
    const [geners, setGeners] = useState([{ genres: "Sci-fi" }, { genres: "Thriller" }]);
    const [watchList, setWatchList] = useState([]);
    const [addList, dispatch] = useReducer(addToList, [], initList);
    const [modalState, setModalState] = useState(false);
    const [isList, setIsList] = useState(false);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(addList))
    }, [addList])

    return (
        <GlobalContext.Provider value={{
            movieData,
            setMovieData,
            loader,
            setLoader,
            geners,
            setGeners,
            filterMovieData,
            setFilterMovieData,
            watchList,
            setWatchList,
            addList,
            dispatch,
            modalState,
            setModalState,
            isList,
            setIsList
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default ContextWrapper;