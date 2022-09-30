import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import WatchList from './pages/watchList/WatchList';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/watchlist' element={<WatchList />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;