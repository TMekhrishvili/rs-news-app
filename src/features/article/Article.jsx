import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchArticles } from './articleAPI';
import Loader from '../../shared/loader/Loader';
import style from './Article.module.css';
import moment from 'moment';

const Article = () => {
    let params = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            const result = await fetchArticles(params.id);
            setArticle(result.data.articles[0]);
            console.log(result)
        }
        fetchArticle();
    }, [params.id])

    return (
        <div>
            {article ?
                <div>
                    <h1 className={style.title}>{article.title}</h1>
                    <div className={style.imgContainer}>
                        <img className={style.img} src={article.urlToImage} alt={article.title} />
                    </div>
                    <p className={style.content} dangerouslySetInnerHTML={{ __html: article.content }} ></p>
                    <div className={style.articleFooter}>
                        <p><span className={style.bold}>Author: </span>{article.author}</p>
                        <p><span className={style.bold}>Published: </span>{moment(article.publishedAt).format('LLL')}</p>
                    </div>
                </div>
                :
                <Loader />}
        </div>
    )
}

export default Article
