import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {AboutLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainLazy} from "./pages/MainPage/MainPage.lazy";
import {Counter} from "./components/Counter";

const App = () => {
    return (
        <div className={'app'}>
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