import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MainPage from './MainPage'
import {createBrowserRouter, RouterProvider, useRouteError} from "react-router-dom";
import {ThemeProvider} from "next-themes";

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
    // Uncaught ReferenceError: path is not defined
    return <div>Dang!</div>;
}

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider
            defaultTheme="system"
            attribute="class"
            value={{
                light: "light",
                dark: "dark",
            }}
        >
                <RouterProvider router={router}/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
