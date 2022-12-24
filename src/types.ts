export type PreloadedPokemonInfo = {
    id: number;
    name: string;
    baseSprite: string;
    officialArtworkSprite?: string | null;
    dreamWorldSprite?: string | null;
};

export type Ability = {
    name: string;
}

export type Pokemon = {
    name: string;
    species: {
        url: string;
    };
    sprites: {
        front_default: string;
    };
    abilities: {ability: Ability}[];
}