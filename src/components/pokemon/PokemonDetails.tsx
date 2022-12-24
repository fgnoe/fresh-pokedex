import {useParams} from "react-router-dom";
import usePokemon from "../../hooks/usePokemon";

const PokemonDetails = ({}) => {
    const { pokemonId } = useParams();
    const {data: pokemon, isLoading} = usePokemon(pokemonId);

    return (<>
        {isLoading || !pokemon
            ? <div>Loading...</div>
            : <div className="ml-5 mt-5">
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <h1 className="text-4xl capitalize">{pokemon.name}</h1>
                <div className="mt-5 ml-1 text-lg">
                    <p>{pokemon.species.flavor_text_entries[0].flavor_text}</p>
                </div>
            </div>}
    </>)
};

export default PokemonDetails;