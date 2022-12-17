import React from 'react';
import {BasicPokemonInfo} from "../../types";

type PokemonCardProps = {
    pokemon: BasicPokemonInfo
};

const PokemonCard = ({pokemon}: PokemonCardProps) => {
    return (
        <div className="card w-50 bg-base-100 shadow-xl ml-2 mr-2 mt-2">
            <figure className="px-10 mt-10">
                <img src={pokemon.baseSprite}/>
            </figure>
            <div className="card-body items-center text-center -mt-5">
                <h2 className="card-title capitalize">{pokemon.name}</h2>
            </div>
        </div>
    );
}

export default PokemonCard;