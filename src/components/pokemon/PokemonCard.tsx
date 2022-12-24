import React, {useState} from 'react';
import {PreloadedPokemonInfo} from "../../types";
import './PokemonCard.css'
import useDebounce from "../../hooks/useDebounce";
import classNames from "classnames";
import {useNavigate} from "react-router-dom";

type PokemonCardProps = {
    pokemon: PreloadedPokemonInfo,
};

const PokemonCard = ({pokemon}: PokemonCardProps) => {
    let navigate = useNavigate();
    const [front, setFront] = useState(true);
    const debouncedFront = useDebounce(front, 300);
    const classes = classNames(
        'pokemon-card-img',
        {
            'card-rotation-out': front !== debouncedFront,
            'card-rotation-in': front === debouncedFront,
        },
    );
    const imgUrl = debouncedFront
        ? pokemon.baseSprite //TODO: add back image to preloaded list
        : pokemon.baseSprite.replace('sprites/pokemon/', 'sprites/pokemon/back/');

    return (
        <div className="card w-50 bg-base-100 shadow-xl ml-2 mr-2 mt-2">
            <figure className="px-10 mt-10">
                <img
                    className={classes}
                    src={imgUrl}
                    onClick={() => setFront(!front)}
                />
            </figure>
            <div className="card-body items-center text-center -mt-5">
                <h2
                    onClick={() => navigate(`/pokemon/${pokemon.id}`)}
                    className="card-title capitalize pokemon-card-title"
                >
                    {pokemon.name}
                </h2>
            </div>
        </div>
    );
}

export default PokemonCard;