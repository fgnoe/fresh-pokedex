import PokemonCard from "../pokemon/PokemonCard";
import './PokemonList.css'
import pokemonList from '../../resources/pokemonList';
import {useEffect, useState} from "react";
import useDebounce from "../../hooks/useDebounce";



type PokemonListProps = {
    searchTerm: string;
}

const preloadedImagesRefs = [];

const preloadBackImages = (limit: number) => {
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
    const[limit,setLimit]=useState(9)
    const debouncedLimit = useDebounce(limit, 300);
    useEffect(() => {
        preloadBackImages(debouncedLimit);
    }, []);

    const cards = pokemonList
        .filter(({name}) => name.toLowerCase().includes(searchTerm?.toLowerCase()))
        .slice(0, debouncedLimit)
        .map(pokemon => {
            return <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
            />;
    });

    return <>
    <input type="range" 
    min="0" 
    max="1000" 
    value={limit} 
    className="range" 
    onChange={e => setLimit(parseInt(e.target.value))} />


    <div className="pokemon-list">
        {cards}
    </div>
    </>
}

export default PokemonList;