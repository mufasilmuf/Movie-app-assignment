import React from 'react'

const GlobalContext = React.createContext({
    movieData: [],
    setMovieData: (data) => { },
    loader: false,
    setLoader: (status) => { },
    geners: [],
    setGeners: (gener) => { },
    filterMovieData: [],
    setFilterMovieData: (data) => { },
    watchList: [],
    setWatchList: (data) => { },
    addList: [],
    dispatcht: (type, payload) => { },
    modalState: false,
    setModalState: (status) => { },
    isList: false,
    setIsList: (status) => { }
});

export default GlobalContext;
