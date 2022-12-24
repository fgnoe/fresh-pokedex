export type PreloadedPokemonInfo = {
    id: number;
    name: string;
    baseSprite: string;
    officialArtworkSprite?: string | null;
    dreamWorldSprite?: string | null;
};

export type Species = {
    evolution_chain: {
        url: string;
    };
    flavor_text_entries: {
        flavor_text: string;
        language: {
            name: string;
        }
    }[];
}

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