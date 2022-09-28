import React, { useState } from 'react'
import GlobalContext from './GlobalContext'

const ContextWrapper = (props) => {

    //movie data..
    const [movieData, setMovieData] = useState([]);
    //loader status..
    const [loader, setLoader] = useState([]);
    //geners..
    const [geners, setGeners] = useState([{ genres: "Sci-fi" }, { genres: "Sci-fi" }]);

    return (
        <GlobalContext.Provider value={{
            movieData,
            setMovieData,
            loader,
            setLoader,
            geners,
            setGeners
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default ContextWrapper;