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
    const [themeIdx, setThemeIdx] = useState(1);
    const setRandomTheme = () => {
        setThemeIdx(Math.floor(Math.random() * themes.length));
    }
    return (
        <div className="App" data-theme={themes[themeIdx]}>
            <header className="App-header">
                <PokemonCard onClick={setRandomTheme}/>
            </header>
        </div>
    )
}

export default MainPage
