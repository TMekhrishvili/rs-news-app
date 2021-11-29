import { configureStore } from '@reduxjs/toolkit';
import homeSlice from '../features/home/homeSlice';
import searchSlice from '../features/home/searchSlice';

export const store = configureStore({
    reducer: {
        home: homeSlice,
        search: searchSlice,
    },
});

