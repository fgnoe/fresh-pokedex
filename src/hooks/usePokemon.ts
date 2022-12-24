import pokeapi from "../components/utils/pokeapi";
import {useQuery} from "react-query";
import querySchemaKeys from "./querySchemaKeys";
import * as r from "ramda";
import {Pokemon} from "../types";



const getPokemon = async (id?: number | string) => {
    const { data: pokemonBaseInfo } = await pokeapi.get<Pokemon>(`/pokemon/${id}`);
    const { data: species } = await pokeapi.get(pokemonBaseInfo.species.url);
    const { data: evolutionChain } = await pokeapi.get(species.evolution_chain.url);

    const pokemon = r.mergeRight(pokemonBaseInfo, {species, evolutionChain});
    return pokemon;
}

const usePokemon = (id?: number | string) =>
    useQuery([querySchemaKeys.POKEMON, id], () => getPokemon(id));

export default usePokemon;