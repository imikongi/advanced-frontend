import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {AboutLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainLazy} from "./pages/MainPage/MainPage.lazy";
import './styles/index.scss'
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";



const App = () => {
    const {theme, changeTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={changeTheme}>ИЗМЕНИТЬ ТЕМУ</button>
            <Link to={'/'}>Mainpage</Link>
            <Link to={'/about'}>AboutPage</Link>
            <Suspense fallback={<div>'Loading......'</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutLazy/>}/>
                    <Route path={'/'} element={<MainLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;