import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import news from '../../../../assets/images/news.jpg';

const Card = ({ data }) => {
    return (
        <div className={style.cardContainer}>
            <h3 className={style.articleTitle} >{data.title}</h3>
            <div className={style.imageContainer} style={{ backgroundImage: `url(${data.urlToImage !== '' ? data.urlToImage : news})`, }}>
            </div>
            <div className={style.addition}>
                <span className={style.author}>{data.author}</span>
                <span className={style.date}>{moment(data.publishedAt).endOf('day').fromNow()}</span>
            </div>
            <p className={style.cardDescription} dangerouslySetInnerHTML={{ __html: data.description }} ></p>
            <Link className={style.readMore} to={data.title}>Read More</Link>
        </div>
    )
}

export default Card