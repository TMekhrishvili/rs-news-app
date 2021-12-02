import React from 'react';
import style from './Loader.module.css';
import loader from '../../../assets/images/loader.gif';

const Loader = () => {
    return (
        <div className={style.loader}>
            <div className={style.imageContainer}>
                <img src={loader} alt="loader" className={style.loaderImage} />
            </div>
        </div>
    )
}

export default Loader