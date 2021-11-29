import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticlesAsync, selectArticles, status, clearState } from './homeSlice';
import Loader from './components/loader/Loader';
import Card from './components/card/Card';
import style from './Home.module.css';
import down from '../../assets/images/down.png'

const sources = [
    'tesla',
    'apple',
    'first',
    'second',
    'third'
]

const NoArticles = () => <p className={style.noArticles}>There are no articles matching your request.</p>

const Home = () => {
    const articles = useSelector(selectArticles);
    const loadingStatus = useSelector(status);
    const dispatch = useDispatch();
    const [searchText, setsearchText] = useState('tesla');
    const ref = useRef(null);
    const ref1 = useRef(null);
    const handleClick = event => {
        setsearchText(event.target.name);
        dispatch(clearState());
    }
    const handleOpen = () => {
        const classNames = ref.current.classList;
        const ulClassNames = ref1.current.classList;
        if (classNames.contains(style.opened)) {
            classNames.add(style.closed);
            classNames.remove(style.opened);
            ulClassNames.add(style.fadeOut);
            ulClassNames.remove(style.fadeIn);
        } else {
            classNames.remove(style.closed);
            classNames.add(style.opened);
            ulClassNames.add(style.fadeIn);
            ulClassNames.remove(style.fadeOut);
        }
        console.log(ref1);
    }
    useEffect(() => {
        articles.length === 0 &&
            dispatch(fetchArticlesAsync(searchText));
    }, [articles.length, searchText, dispatch])

    return (
        <>
            <header className={style.header}>
                <div className={style.titleContainer}>
                    <h1 className={style.title}>news</h1>
                </div>
                <div
                    ref={ref}
                    className={style.sourceContainer}
                    onClick={handleOpen}
                >
                    <div className={style.arrowContainer}>
                        <img className={style.arrow} src={down} alt="arrow-down" />
                    </div>
                    <p className={style.selectedSource}>tesla</p>
                    <ul
                        ref={ref1}
                        className={style.ul}
                    >
                        {sources.map((value, index) =>
                            <li
                                key={index}
                                onClick={handleClick}
                                name={value}
                            >
                                {value}
                            </li>
                        )}
                    </ul>
                </div>
                <div className={style.searchContainer}>
                    <input
                        type="text"
                        name="searchText"
                        className={style.search}
                        onChange={event => setsearchText(event.target.value)}
                    />
                    <button
                        className={style.searchButton}
                        onClick={() => dispatch(clearState())}
                    >
                        search
                    </button>
                </div>
            </header>
            {loadingStatus === 'loading' ? <Loader /> :
                articles.length > 0 ?
                    articles.map((value, index) => <Card key={index} data={value} />) :
                    <NoArticles />}
        </>
    )
}

export default Home