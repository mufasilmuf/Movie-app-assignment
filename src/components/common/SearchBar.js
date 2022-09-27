import React from 'react';

import CommonStyle from "./Common.module.scss";

const SearchBar = (props) => {
    const { name } = props;

    return (
        <section className={CommonStyle.SearchBar}>
            <input type="text" placeholder={name} className="form-control" />
        </section>
    )
}

export default SearchBar;