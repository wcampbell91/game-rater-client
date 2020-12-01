import React from 'react';
import { ApplicationViews } from './ApplicationViews'
import {Route, Redirect} from 'react-router-dom'
import { Login } from './auth/Login'
import { NavBar } from './nav/NavBar'
import { Register } from './auth/Register'

export const GameRater = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("gr_token")) {
                return <>
                    <Route render={NavBar} />
                    <Route render={props => <ApplicationViews {...props} />} />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />
    </>
)
