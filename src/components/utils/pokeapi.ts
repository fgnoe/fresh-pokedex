import axios from 'axios';
// @ts-ignore
import wrapper from 'axios-cache-plugin';

const pokeapi = wrapper(axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
}), {
    maxCacheSize: 30000,
});

export default pokeapi;