import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticlesAsync, selectArticles, status, clearState } from './homeSlice';
import Loader from './components/loader/Loader';
import Card from './components/card/Card';
import style from './Home.module.css';

const sources = [
    'tesla',
    'apple',
    'first',
    'second',
    'third'
]

const Home = () => {
    const articles = useSelector(selectArticles);
    const loadingStatus = useSelector(status);
    const dispatch = useDispatch();
    const [searchText, setsearchText] = useState('tesla');

    const handleClick = event => {
        setsearchText(event.target.name);
        dispatch(clearState());
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
                <div className={style.sourceContainer}                >
                    {sources.map((value, index) =>
                        <button
                            key={index}
                            onClick={handleClick}
                            name={value}
                        >
                            {value}
                        </button>
                    )}
                </div>
                <div className={style.searchContainer}>
                    <input
                        type="text"
                        name="searchText"
                        placeholder="Search"
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
                    <p className={style.noArticles}>There are no articles matching your request.</p>}

        </>
    )
}

export default Home