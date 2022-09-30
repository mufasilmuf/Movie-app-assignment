import React from 'react';
import { Link } from 'react-router-dom';

import HeaderStyle from './Header.module.scss';

const Header = () => {
    return (
        <header className={HeaderStyle.headerbg}>
            <div className={`${HeaderStyle.header} container`}>
                <Link to='/'>
                    <section className={HeaderStyle.logo_container}>
                        <img src="https://i.pinimg.com/736x/32/28/22/3228223e47caf5b3e3613f7ac3d8e7b6.jpg" alt='logo' className={HeaderStyle.logo} />
                        <span>Movie Mania</span>
                    </section>
                </Link>
                <img className={HeaderStyle.profile_logo} src='https://accounts.simplilearn.com/image/profile-picture' alt='profile-logo' />
            </div>
        </header>
    )
}

export default Header