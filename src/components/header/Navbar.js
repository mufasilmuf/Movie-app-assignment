import React from 'react';
import { Link } from 'react-router-dom';

import NavStyle from "./Header.module.scss";

const Navbar = () => {
    return (
        <nav className={NavStyle.navbarbg}>
            <div className={`${NavStyle.navbar} container`}>
                <div className={NavStyle.watchlist}><Link to='/watchlist'>WatchList</Link></div>
            </div>
        </nav>
    )
}

export default Navbar;