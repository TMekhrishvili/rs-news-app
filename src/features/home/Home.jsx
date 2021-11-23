import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticlesAsync, selectArticles, status } from './homeSlice';
import Loader from './components/loader/Loader';
import Card from './components/card/Card';
import './Home.module.css';

const Home = () => {
    const articles = useSelector(selectArticles);
    const loadingStatus = useSelector(status);
    const dispatch = useDispatch();

    const [searchText, setsearchText] = useState('tesla')

    useEffect(() => {
        dispatch(fetchArticlesAsync(searchText));
    }, [])

    return (
        <>
            {loadingStatus === 'loading' ? <Loader /> :
                articles && articles.articles && articles.articles.map((value, index) => <Card key={index} data={value} />)}

        </>
    )
}

export default Home