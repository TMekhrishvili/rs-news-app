import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './features/home/Home';
import Article from './features/article/Article';
import Page404 from './features/page404/Page404';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="article/:id" element={<Article />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
