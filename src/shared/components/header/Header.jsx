import React from 'react';
import style from './Header.module.css';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.titleContainer}>
                <Link to="/"><h1 className={style.title}>news</h1></Link>
            </div>
            <Outlet />
        </header>
    )
}

export default Header
