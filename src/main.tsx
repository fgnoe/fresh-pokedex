import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MainPage from './MainPage'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ThemeProvider} from "next-themes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
]);

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
