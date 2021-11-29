import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import down from '../../../../assets/images/down.png';
import style from './Sources.module.css';
import { setSearchText } from '../../searchSlice';
import { clearState } from '../../homeSlice';

const sources = [
    'tesla',
    'apple',
    'first',
    'second',
    'third'
]

const Sources = () => {
    const srcContainer = useRef(null);
    const ul = useRef(null);
    const dispatch = useDispatch();
    const [selectedSource, setSelectedSource] = useState('tesla');

    const handleOpen = () => {
        const classNames = srcContainer.current.classList;
        const ulClassNames = ul.current.classList;
        if (classNames.contains(style.opened)) {
            classNames.add(style.closed);
            classNames.remove(style.opened);
            ulClassNames.add(style.fadeOut);
            ulClassNames.remove(style.fadeIn);
        } else {
            classNames.remove(style.closed);
            classNames.add(style.opened);
            ulClassNames.add(style.fadeIn);
            ulClassNames.remove(style.fadeOut);
        }
    }

    const handleClick = name => {
        setSelectedSource(name);
        dispatch(setSearchText(name));
        dispatch(clearState());
    }

    return (
        <div>
            <div
                ref={srcContainer}
                className={style.sourceContainer}
                onClick={handleOpen}
            >
                <div className={style.arrowContainer}>
                    <img className={style.arrow} src={down} alt="arrow-down" />
                </div>
                <p className={style.selectedSource}>{selectedSource}</p>
                <ul
                    ref={ul}
                    className={style.ul}
                >
                    {sources.map((value, index) =>
                        <li
                            key={index}
                            onClick={event => {
                                handleClick(event.target.innerText);
                            }}
                        >
                            {value}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Sources
