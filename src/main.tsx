import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MainPage from './MainPage'
import {createBrowserRouter, RouterProvider, useRouteError} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        errorElement: <ErrorBoundary/>,
    },
], {basename: "/fresh-pokedex/"});

function ErrorBoundary() {
    let error = useRouteError();
    console.error(error);
    return <div>Dang!</div>;
}

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
    document.getElementById('root')
)
