import React, { useState } from 'react';
import { setSearchText } from '../../searchSlice';
import { clearState } from '../../homeSlice';
import { useDispatch } from 'react-redux';
import style from './Search.module.css';

const Search = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const handleClick = () => {
        dispatch(setSearchText(input))
        dispatch(clearState());
    }
    
    return (
        <div className={style.searchContainer}>
            <input
                type="text"
                name="searchText"
                className={style.search}
                onChange={event => setInput(event.target.value)}
            />
            <button
                className={style.searchButton}
                onClick={handleClick}
            >
                search 
            </button>
        </div>
    )
}

export default Search
