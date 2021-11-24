import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    console.log(data)
    return (
        <div className={style.cardContainer}>
            <div className={style.imageContainer}>
                <img src={data.urlToImage} alt={data.title} className={style.image} />
            </div>
            <div className={style.articleContainer}>
                <h3 className={style.articleTitle} >{data.title}</h3>
                <p className={style.cardDescription}>{data.description}</p>
                <Link className={style.readMore} to="#">Read More</Link>
            </div>

            {/* Source, Date of publication*/}
        </div>
    )
}

export default Card