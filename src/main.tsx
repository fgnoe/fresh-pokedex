import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MainPage from './MainPage'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {createTheme, NextUIProvider} from '@nextui-org/react';
import {ThemeProvider} from "next-themes";

const lightTheme = createTheme({
    type: 'light',
    theme: {}
})

const darkTheme = createTheme({
    type: 'dark',
    theme: {}
})

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
                light: lightTheme.className,
                dark: darkTheme.className
            }}
        >
            <NextUIProvider>
                <RouterProvider router={router}/>
            </NextUIProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
