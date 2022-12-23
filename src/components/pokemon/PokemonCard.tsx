import React, {useState} from 'react';
import {BasicPokemonInfo} from "../../types";
import './PokemonCard.css'
import useDebounce from "../../hooks/useDebounce";
import classNames from "classnames";

type PokemonCardProps = {
    pokemon: BasicPokemonInfo
};

const PokemonCard = ({pokemon}: PokemonCardProps) => {
    const [front, setFront] = useState(true);
    const debouncedFront = useDebounce(front, 300);
    const classes = classNames(
        {
            'card-rotation-out': front !== debouncedFront,
            'card-rotation-in': front === debouncedFront,
        },
    )
    const imgUrl = debouncedFront
        ? pokemon.baseSprite //TODO: add back image to preloaded list
        : pokemon.baseSprite.replace('sprites/pokemon/', 'sprites/pokemon/back/');

    return (
        <div className="card w-50 bg-base-100 shadow-xl ml-2 mr-2 mt-2">
            <figure className="px-10 mt-10">
                <img className={classes} src={imgUrl}/>
            </figure>
            <div className="card-body items-center text-center -mt-5">
                <div className="items-center -mt-3">
                    <input
                        type="checkbox"
                        className="toggle toggle-xs"
                        checked={front}
                        onClick={() => setFront(!front)}
                    />
                </div>
                <h2 className="card-title capitalize">{`${pokemon.id} ${pokemon.name}`}</h2>
            </div>
        </div>
    );
}

export default PokemonCard;