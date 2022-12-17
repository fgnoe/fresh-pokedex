import './MainPage.css'
import React, {useState} from "react";
import {createBrowserRouter, RouterProvider, useRouteError} from "react-router-dom";
import NavBar from "./components/NavBar";
import PokemonList from "./components/pokemon-list/PokemonList";

// const themes = [
//     'light', 'dark', 'cupcake',
//     'bumblebee', 'emerald', 'corporate',
//     'synthwave', 'retro', 'cyberpunk',
//     'valentine', 'halloween', 'garden',
//     'forest', 'aqua', 'lofi',
//     'pastel', 'fantasy', 'wireframe',
//     'black', 'luxury', 'dracula',
//     'cmyk', 'autumn', 'business',
//     'acid', 'lemonade', 'night',
//     'coffee', 'winter',
// ];

const ErrorBoundary = () => {
    let error = useRouteError();
    console.error(error);
    return <div>Dang!</div>;
}

function MainPage() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <PokemonList />,
            errorElement: <ErrorBoundary/>,
        },
    ], {basename: "/fresh-pokedex/"});

    const [darkMode, setDarkMode] = useState(true);
    return (
        <div className="App" data-theme={darkMode ? 'dark' : 'cupcake'}>
            <header className="App-header">
                <NavBar setDarkMode={setDarkMode} darkMode={darkMode}/>
                <RouterProvider router={router}/>
            </header>
        </div>
    )
}

export default MainPage
