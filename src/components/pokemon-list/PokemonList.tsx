import PokemonCard from "../pokemon/PokemonCard";
import './PokemonList.css'
import pokeapi from "../utils/pokeapi";
import {useEffect, useState} from "react";
import {BasicPokemonInfo} from "../../types";

type PokemonListProps = {
    searchTerm: string;
}

const PokemonList = ({searchTerm} :PokemonListProps) => {
    const [pokemonList, setPokemonList] = useState<BasicPokemonInfo[]>([]);
    useEffect(() => {
        pokeapi.get('/pokemon', {params: {limit: 1000}})
            .then((response: any) => {
                setPokemonList(response.data.results);
            })
            .catch((error: any) => {
                console.error(error);
            });
    }, []);

    const cards = pokemonList
        .filter(({name}) => name.includes(searchTerm))
        .map(({name, url}) => {
            return <PokemonCard key={url} name={name} detailsUrl={url}/>;
    });

    return <div className="pokemon-list">
        {cards}
    </div>
}

export default PokemonList;