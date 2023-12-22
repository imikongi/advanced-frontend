import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";


const App = () => {
    const {theme, changeTheme} = useTheme()

    return (
        <div className={classNames('app', {},[theme])}>
            <button onClick={changeTheme}>ИЗМЕНИТЬ ТЕМУ</button>
            <Link to={'/'}>Mainpage</Link>
            <Link to={'/about'}>AboutPage</Link>
            <AppRouter/>
        </div>
    );
};

export default App;