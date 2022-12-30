import pokeapi from "../components/utils/pokeapi";
import {useQuery} from "react-query";
import querySchemaKeys from "./querySchemaKeys";
import * as r from "ramda";
import {Pokemon} from "../types/TPokemon";
import {Species} from "../types/TSpecies";
import {EvolutionChain} from "../types/TEvolutionChain";



const getPokemon = async (id?: number | string) => {
    const { data: pokemonBaseInfo } = await pokeapi.get<Pokemon>(`/pokemon/${id}`);
    const { data: species } = await pokeapi.get<Species>(pokemonBaseInfo.species.url);
    const { data: evolutionChain } = await pokeapi.get<EvolutionChain>(species.evolution_chain.url);

    const pokemon = r.mergeRight(pokemonBaseInfo, {species, evolutionChain});
    return pokemon;
}

const usePokemon = (id?: number | string) =>
    useQuery([querySchemaKeys.POKEMON, id], () => getPokemon(id));

export default usePokemon;