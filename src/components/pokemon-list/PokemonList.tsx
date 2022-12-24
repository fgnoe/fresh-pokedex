import PokemonCard from "../pokemon/PokemonCard";
import './PokemonList.css'
import pokemonList from '../../resources/pokemonList.json';
import {useEffect} from "react";

type PokemonListProps = {
    searchTerm: string;
}

const preloadBackImages = () => {
    pokemonList.forEach(pokemon => {
        new Image().src = pokemon.baseSprite
            //TODO: add back image to preloaded list
            .replace('sprites/pokemon/', 'sprites/pokemon/back/');
    })
}

const PokemonList = ({searchTerm} :PokemonListProps) => {
    useEffect(() => {
        preloadBackImages();
    }, []);

    const cards = pokemonList
        .slice(0, 50)
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