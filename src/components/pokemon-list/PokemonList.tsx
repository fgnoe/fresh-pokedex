import PokemonCard from "../pokemon/PokemonCard";
import './PokemonList.css'
import pokemonList from '../../resources/pokemonList.json';

type PokemonListProps = {
    searchTerm: string;
}

const PokemonList = ({searchTerm} :PokemonListProps) => {
    const cards = pokemonList
        .filter(({name}) => name.includes(searchTerm))
        .map(pokemon => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon}/>;
    });

    return <div className="pokemon-list">
        {cards}
    </div>
}

export default PokemonList;