import PokemonCard from "../pokemon/PokemonCard";
import './PokemonList.css'
import pokemonList from '../../resources/pokemonList';
import {useEffect} from "react";

const limit = 151;

type PokemonListProps = {
    searchTerm: string;
}

const preloadedImagesRefs = [];

const preloadBackImages = () => {
    const preloadImage = (src?: string) => {
        if (!src) return;

        const img = new Image();
        img.src = src;
        preloadedImagesRefs.push(img);
    }
    pokemonList
        .slice(0, limit)
        .forEach(pokemon => {
            preloadImage(pokemon.baseSprite);
            preloadImage(pokemon.backSprite);
            preloadImage(pokemon.baseShinySprite);
            preloadImage(pokemon.backShinySprite);
    })
}

const PokemonList = ({searchTerm} :PokemonListProps) => {
    useEffect(() => {
        preloadBackImages();
    }, []);

    const cards = pokemonList
        .slice(0, limit)
        .filter(({name}) => name.toLowerCase().includes(searchTerm?.toLowerCase()))
        .map(pokemon => {
            return <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
            />;
    });

    return <div className="pokemon-list">
        {cards}
    </div>
}

export default PokemonList;