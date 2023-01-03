const fs = require('fs');
const canvas = require('canvas');
const blurhash = require('blurhash');
const axios = require('axios').create({
    headers: { "Accept-Encoding": "gzip,deflate,compress" }
});

const loadImage = async src =>
    new Promise((resolve, reject) => {
        const img = new canvas.Image();
        img.onload = () => resolve(img);
        img.onerror = (...args) => reject(args);
        img.src = src;
    });

const getImageData = image => {
    const _canvas = canvas.createCanvas(image.width, image.height);
    const context = _canvas.getContext("2d");
    context.drawImage(image, 0, 0);
    return context.getImageData(0, 0, image.width, image.height);
};

const encodeImageToBlurhash = async imageUrl => {
    const image = await loadImage(imageUrl);
    const imageData = getImageData(image);
    return blurhash.encode(imageData.data, imageData.width, imageData.height, 9, 9);
};

const getAllPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10000';
    return await axios.get(url);
}

const getPokemonDetails = async (pokemonInfo) => {
    const pokemonList = [];
    let fetched = 0;
    const toFetch = pokemonInfo.length;
    for (const pokemon of pokemonInfo) {
        const url = pokemon.url;
        const name = pokemon.name;
        fetched += 1;
        console.log(`Fetching ${name} ${fetched} of ${toFetch}`);
        const body = await axios.get(url);
        const data = body.data;
        if (
            data.sprites.other &&
            data.sprites.front_default &&
            data.sprites.other.dream_world &&
            data.sprites.other['official-artwork']
        ) {
            const sprites = data.sprites;
            const blurhash = await encodeImageToBlurhash(sprites.front_default);
            const pokemonRaw = {
                id: data.id,
                name: name,
                baseSprite: sprites.front_default,
                backSprite: sprites.back_default,
                baseShinySprite: sprites.front_shiny,
                backShinySprite: sprites.back_shiny,
                dreamWorldSprite: sprites.other.dream_world.front_default,
                officialArtworkSprite: sprites.other['official-artwork'].front_default,
                blurhash: blurhash,
            };
            const pokemon = Object.fromEntries(
                Object.entries(pokemonRaw).filter(([, value]) => value !== null)
            );
            pokemonList.push(pokemon);
        }
    }
    return pokemonList;
}

const buildJson = (obj) => {
    fs.writeFile('src/resources/pokemonList.ts', `export default ${JSON.stringify(obj)}`, () => {});
}

const buildList = async () => {
    const allPokemonBasicInfo = await getAllPokemon();
    const allPokemonDetails = await getPokemonDetails(allPokemonBasicInfo.data.results);
    buildJson(allPokemonDetails);
}

buildList();