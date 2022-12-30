import requests
import json


def get_all_pokemon():
    url = 'https://pokeapi.co/api/v2/pokemon?limit=10000'
    r = requests.get(url)
    data = r.json()
    return data['results']


def get_pokemon_details(pokemon_info):
    pokemon_list = []
    fetched = 0
    to_fetch = len(pokemon_info)
    for pokemon in pokemon_info:
        url, name = pokemon['url'], pokemon['name']
        fetched += 1
        print('Fetching {} {} of {}'.format(name, fetched, to_fetch))
        r = requests.get(url)
        data = r.json()
        if 'other' in data['sprites'] and "dream_world" in data['sprites']['other'] and "official-artwork" in data['sprites']['other']:
            sprites = data['sprites']
            pokemon = {
                'id': data['id'],
                'name': name,
                'baseSprite': sprites['front_default'],
                'backSprite': sprites['back_default'],
                'baseShinySprite': sprites['front_shiny'],
                'backShinySprite': sprites['back_shiny'],
                'dreamWorldSprite': sprites['other']['dream_world']['front_default'],
                'officialArtworkSprite': sprites['other']['official-artwork']['front_default']
            },
            pokemon_list.append(pokemon)
    return pokemon_list


def build_json(obj):
    with open('src/resources/pokemonList.ts', 'w') as outfile:
        json.dump(obj, outfile)


all_pokemon_basic_info = get_all_pokemon()
all_pokemon_details = get_pokemon_details(all_pokemon_basic_info)
build_json(all_pokemon_details)
