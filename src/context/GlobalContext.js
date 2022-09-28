import React from 'react'

const GlobalContext = React.createContext({
    movieData: [],
    setMovieData: (data) => { },
    loader: false,
    setLoader: (status) => { },
    geners: [],
    setGeners: (gener) => { }
});

export default GlobalContext;
