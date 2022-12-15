import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MainPage from './MainPage'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
]);

ReactDOM.render(
  <React.StrictMode>
          <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
)
