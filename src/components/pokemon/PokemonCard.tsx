import React, {useEffect, useState} from 'react';
import pokeapi from "../utils/pokeapi";

type PokemonCardProps = {
    name: string;
    detailsUrl: string;
};

const PokemonCard = ({name, detailsUrl}: PokemonCardProps) => {
    const [pokemon, setPokemon] = useState<any>(null);
    useEffect(() => {
        pokeapi.get(detailsUrl)
            .then((response: any) => {
                setPokemon(response.data);
            })
            .catch((error: any) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="card w-50 bg-base-100 shadow-xl ml-2 mr-2 mt-2">
            <figure className="px-10 mt-10">
                <img src={pokemon?.sprites?.front_default}/>
            </figure>
            <div className="card-body items-center text-center -mt-5">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    );
}

export default PokemonCard;