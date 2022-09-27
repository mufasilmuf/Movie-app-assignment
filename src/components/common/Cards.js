import React from 'react';

import CommonStyle from "./Common.module.scss";

const Cards = (props) => {
    const { posterImage, title, rating } = props
    return (
        <section className={CommonStyle.card}>
            <img src={posterImage} alt={title} />
            <div className={CommonStyle.card_details}>
                <p>{title}</p>
                <p>Rating: {rating}</p>
            </div>
        </section>
    )
}

export default Cards