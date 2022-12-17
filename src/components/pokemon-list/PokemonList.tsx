import PokemonCard from "../pokemon/PokemonCard";
import './PokemonList.css'
import pokeapi from "../utils/pokeapi";
import {useEffect, useState} from "react";

const PokemonList = () => {
    const cards = [...Array(151).keys()].map(x => ++x)
        .map(n => {
        return <PokemonCard pokemonId={n}/>;
    });

    return <div className="pokemon-list">
        {cards}
    </div>
}

export default PokemonList;