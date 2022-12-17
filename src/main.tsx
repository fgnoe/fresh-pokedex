import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MainPage from './MainPage'
import {createBrowserRouter, RouterProvider, useRouteError} from "react-router-dom";
import NavBar from "./components/NavBar";


ReactDOM.render(
    <React.StrictMode>
        <MainPage/>
    </React.StrictMode>,
    document.getElementById('root')
)
