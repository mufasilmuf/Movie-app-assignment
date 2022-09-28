import React from 'react';

import CommonStyle from './Common.module.scss';

const Filter = (props) => {
    const { name, option } = props;

    return (
        <div className={CommonStyle.fiterBox}>
            <select name={name} className="form-control">
                <option value="volvo" disabled>{name}</option>
                {option.map((value) => (
                    <option value={value} key={value}>{value.genres}</option>
                ))}
            </select>
        </div>
    )
}

export default Filter