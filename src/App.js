import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './features/home/Home';
import Article from './features/article/Article';
import Page404 from './features/page404/Page404';
import Header from './shared/components/header/Header';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Header />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/:id" element={<Article />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
