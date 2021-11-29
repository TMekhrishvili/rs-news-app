import React from 'react';
import style from './Header.module.css';
import Sources from '../sources/Sources';
import Search from '../search/Search';

const Header = () => {


    return (
        <header className={style.header}>
            <div className={style.titleContainer}>
                <h1 className={style.title}>news</h1>
            </div>
            <Sources />
            <Search />
        </header>
    )
}

export default Header
