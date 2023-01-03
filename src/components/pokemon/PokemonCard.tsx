import React, {useEffect, useState} from 'react';
import {PreloadedPokemonInfo} from "../../types/types";
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
    const [shiny, setShiny] = useState(false);
    const debouncedFront = useDebounce(front, 300);

    useEffect(() => {
        if(shiny) {
            setTimeout(() => {
                setShiny(false);
            }, 3000);
        } else {
            setTimeout(() => {
                setShiny(true);
            }, Math.random() * 30000);
        }
    }, [shiny])

    const classes = classNames(
        'pokemon-card-img',
        {
            'card-rotation-out': front !== debouncedFront,
            'card-rotation-in': front === debouncedFront,
        },
    );

    const sprites = shiny
        ? { front: pokemon.baseShinySprite, back: pokemon.backShinySprite}
        : { front: pokemon.baseSprite, back: pokemon.backSprite};
    const imgUrl = debouncedFront
        ? sprites.front
        : sprites.back;

    return (
        <div className="card w-50 bg-base-100 shadow-xl ml-2 mr-2 mt-2">
            <figure className="px-10 mt-10">
                <img
                    key={`pokemon-${pokemon.id}-${front}`}
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
                    {`${pokemon.id}: ${pokemon.name}`}
                </h2>
            </div>
        </div>
    );
}

export default PokemonCard;