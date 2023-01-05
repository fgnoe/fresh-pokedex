import {useParams} from "react-router-dom";
import usePokemon from "../../hooks/usePokemon";

const PokemonDetails = ({}) => {
    const { pokemonId } = useParams();
    const {data: pokemon, isLoading} = usePokemon(pokemonId);

    const baseDescription = pokemon?.species.flavor_text_entries
        .find(frame => frame.language.name == 'en')
        ?.flavor_text;

    return (<>

        {isLoading || !pokemon
            ? <div>Loading...</div>
            : <div >
                <div className="carousel w-1/2 mx auto">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src={pokemon.sprites.front_default}
                            className="w-1/2"
                            alt={pokemon.name}
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src={pokemon.sprites.versions?.["generation-iii"]}
                            className="w-1/2"
                            alt={pokemon.name}
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src={pokemon.sprites.front_shiny_female}
                            className="w-1/2"
                            alt={pokemon.name}
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a> 
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <h1 className="text-4xl capitalize">{pokemon.name}</h1>
                <div className="mt-5 ml-1 text-lg">
                    <p>{baseDescription}</p>
                </div>
                <div className="mt-8">  {'Abilities: '}   
                    {pokemon.abilities.map(({ability}) =>
                          <div className="badge ml-2 capitalize">{ability.name}</div>
                        )}
                </div>
            </div>}
    </>)
};

export default PokemonDetails;