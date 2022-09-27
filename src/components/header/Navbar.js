import React from 'react';

import NavStyle from "./Header.module.scss";

const Navbar = () => {
    return (
        <nav className={NavStyle.navbarbg}>
            <div className={`${NavStyle.navbar} container`}>
                <div className={NavStyle.watchlist}>WatchList</div>
                <ul>
                    <li>sort by</li>
                    <li>grid</li>
                    <li>list</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;