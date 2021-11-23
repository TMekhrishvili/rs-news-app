import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchArticles } from './homeAPI';

const initialState = {
    articles: [],
    status: 'idle',
    error: null
}

export const fetchArticlesAsync = createAsyncThunk(
    'home/fetchArticles',
    async (searchText) => {
        const response = await fetchArticles(searchText);
        return response.data;
    }
);

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchArticlesAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.articles = action.payload;
            })
            .addCase(fetchArticlesAsync.rejected, (state) => {
                state.status = 'idle';
                state.error = 'error';
            });
    },
});

export const selectArticles = (state) => state.home.articles;
export const status = (state) => state.home.status;
export const error = (state) => state.home.error;

export default homeSlice.reducer;