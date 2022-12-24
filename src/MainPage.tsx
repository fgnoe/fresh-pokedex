import './MainPage.css'
import React, {useState} from "react";
import {createBrowserRouter, RouterProvider, useRouteError} from "react-router-dom";
import NavBar from "./components/NavBar";
import PokemonList from "./components/pokemon-list/PokemonList";
import useDebounce from "./hooks/useDebounce";
import PokemonDetails from "./components/pokemon/PokemonDetails";
import Footer from "./Footer";

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
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <PokemonList searchTerm={debouncedSearchTerm} />,
            errorElement: <ErrorBoundary />,
        },
        {
            path: '/pokemon/:pokemonId',
            element : <PokemonDetails />,
            errorElement: <ErrorBoundary />
        }
    ],);

    const [darkMode, setDarkMode] = useState(true);
    return (
        <div className="App flex flex-col" data-theme={darkMode ? 'dark' : 'cupcake'}>
            <header className="App-header flex flex-col min-h-screen">
                <NavBar
                    setDarkMode={setDarkMode}
                    darkMode={darkMode}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                    <RouterProvider router={router}/>
                <Footer />
            </header>
        </div>
    )
}

export default MainPage
