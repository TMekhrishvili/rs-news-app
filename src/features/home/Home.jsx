import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticlesAsync, selectArticles, status } from './homeSlice';
import Loader from '../../shared/components/loader/Loader';
import Card from './components/card/Card';
import style from './Home.module.css';
import { searchText } from './searchSlice';
import Search from './components/search/Search';

const NoArticles = () => <p className={style.noArticles}>There are no articles matching your request.</p>

const Home = () => {
    const articles = useSelector(selectArticles);
    const loadingStatus = useSelector(status);
    const search = useSelector(searchText);
    const dispatch = useDispatch();

    useEffect(() => {
        articles.length === 0 &&
            dispatch(fetchArticlesAsync(search));
    }, [articles.length, search, dispatch])

    return (
        <>
            <Search />
            {loadingStatus === 'loading' ? <Loader /> :
                articles.length > 0 ?
                    <div className={style.cardContainer}>{articles.map((value, index) => <Card key={index} data={value} />)}</div> :
                    <NoArticles />}
        </>
    )
}

export default Home