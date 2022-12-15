import PokemonCard from './components/pokemon/PokemonCard'
import './MainPage.css'
import {useEffect, useState} from "react";

const themes = [
    'light', 'dark', 'cupcake',
    'bumblebee', 'emerald', 'corporate',
    'synthwave', 'retro', 'cyberpunk',
    'valentine', 'halloween', 'garden',
    'forest', 'aqua', 'lofi',
    'pastel', 'fantasy', 'wireframe',
    'black', 'luxury', 'dracula',
    'cmyk', 'autumn', 'business',
    'acid', 'lemonade', 'night',
    'coffee', 'winter',
]

function MainPage() {
    const [themeIdx, setThemeIdx] = useState(0);
    useEffect(() => {
        const id = setInterval(() =>
            setThemeIdx((oldCount) => (oldCount + 1) % themes.length), 1000);
        return () => {
            clearInterval(id);
        };
    }, []);
    return (
        <div className="App" data-theme={themes[themeIdx]}>
            <header className="App-header">
                <PokemonCard/>
            </header>
        </div>
    )
}

export default MainPage
