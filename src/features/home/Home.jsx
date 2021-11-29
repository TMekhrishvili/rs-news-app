import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticlesAsync, selectArticles, status } from './homeSlice';
import Loader from '../../shared/loader/Loader';
import Card from './components/card/Card';
import style from './Home.module.css';
import Header from './components/header/Header';
import { searchText } from './searchSlice';


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
            <Header />
            {loadingStatus === 'loading' ? <Loader /> :
                articles.length > 0 ?
                    articles.map((value, index) => <Card key={index} data={value} />) :
                    <NoArticles />}
        </>
    )
}

export default Home