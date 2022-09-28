import React from 'react';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

import CommonStyle from "./Common.module.scss";
import { trimStr } from '../../utils/helper-function';

const Cards = (props) => {
    const { posterImage, title, rating } = props;

    return (
        <section className={CommonStyle.card}>
            <img src={posterImage} alt={title} />
            <div className={CommonStyle.card_details}>
                <div className={CommonStyle.title}>{trimStr(title, 15, '')}</div>
                <div className={CommonStyle.rating}>Rating: {rating}</div>
                <PlaylistAddIcon className={CommonStyle.addList} />
            </div>
        </section>
    )
}

export default Cards