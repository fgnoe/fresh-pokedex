import React from 'react';

const PokemonCard = () => {
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Squirtle</h2>
            </div>
        </div>
    );
}

export default PokemonCard;