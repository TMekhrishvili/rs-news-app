import React from 'react';
import style from './Header.module.css';
import Search from '../search/Search';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.titleContainer}>
                <Link to="/"><h1 className={style.title}>news</h1></Link>
            </div>
            <Search />
        </header>
    )
}

export default Header
