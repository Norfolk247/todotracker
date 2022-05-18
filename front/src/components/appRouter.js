import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {mainPage, settingsPage} from "../routes";

const AppRouter = ({isLogged}) => {
    return (
        <Routes>
            {isLogged? <Route path={settingsPage.path} component={settingsPage.Component}/> : ''}
            <Route path={mainPage.path} component={mainPage.Component} exact/>
        </Routes>
    );
};

export default AppRouter;