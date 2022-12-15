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
], {basename: "/fresh-pokedex"});

ReactDOM.render(
    <ThemeProvider
        defaultTheme="system"
        attribute="class"
        value={{
            light: "light",
            dark: "dark",
        }}
    >
        <RouterProvider router={router}/>
    </ThemeProvider>,
    document.getElementById('root')
)
