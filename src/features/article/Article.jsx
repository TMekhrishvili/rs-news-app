import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchArticles } from './articleAPI';
import Loader from '../../shared/components/loader/Loader';
import style from './Article.module.css';
import moment from 'moment';
import news from '../../assets/images/news.jpg';

const Article = () => {
    let params = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchArticle = async () => {
            const result = await fetchArticles(params.id);
            setArticle(result.data.articles[0]);
            setLoading(false);
        }
        fetchArticle();
    }, [params.id])

    return (
        <div>
            {loading ?
                <Loader /> :
                article ?
                    <div className={style.container}>
                        <h1 className={style.title}>{article.title}</h1>
                        <div className={style.imgContainer}>
                            <img className={style.img} src={article.urlToImage === '' ? news : article.urlToImage} alt={article.title} />
                        </div>
                        <p className={style.content} dangerouslySetInnerHTML={{ __html: article.content }} ></p>
                        <div className={style.articleFooter}>
                            <p><span className={style.bold}>Author: </span>{article.author}</p>
                            <p><span className={style.bold}>Published: </span>{moment(article.publishedAt).format('DD MMM YYYY HH:mm')}</p>
                        </div>
                    </div> :
                    <p className={style.smthWrong}>Something went wrong!</p>
            }
        </div>
    )
}

export default Article
