import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectArticles } from '../home/homeSlice';
import Card from '../home/components/card/Card';

const Article = () => {
    let params = useParams();
    const articles = useSelector(selectArticles);
    const article = articles.find(elem => elem.title === params.id);

    return (
        <div>
            <Card data={article} />
        </div>
    )
}

export default Article
