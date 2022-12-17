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
        print('Fetching ' + name + ' (' + str(fetched) + '/' + str(to_fetch) + ')')
        r = requests.get(url)
        data = r.json()
        if 'other' in data['sprites'] and "dream_world" in data['sprites']['other'] and "official-artwork" in data['sprites']['other']:
            pokemon = {
                'id': data['id'],
                'name': name,
                'baseSprite': data['sprites']['front_default'],
                'dreamWorldSprite': data['sprites']['other']['dream_world']['front_default'],
                'officialArtworkSprite': data['sprites']['other']['official-artwork']['front_default']
            },
            pokemon_list.append(pokemon)
    return pokemon_list


def build_json(obj):
    with open('./src/resources/pokemonList.json', 'w') as outfile:
        json.dump(obj, outfile)


all_pokemon_basic_info = get_all_pokemon()
all_pokemon_details = get_pokemon_details(all_pokemon_basic_info)
build_json(all_pokemon_details)
