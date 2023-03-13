import {useEffect, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {Result} from '../interfaces/pokemonInterfaces';
import {
  PokemonPaginatedResponse,
  SimplePokemon,
} from '../interfaces/pokemonInterfaces';

export const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [simplePokeList, setSimplePokeList] = useState<SimplePokemon[]>([]);

  const loadPokemons = async () => {
    const resp = await pokemonApi.get<PokemonPaginatedResponse>(
      'https://pokeapi.co/api/v2/pokemon/?limit=1200',
    );
    mapSimplePokemonList(resp.data.results);
  };

  const mapSimplePokemonList = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url}) => {
      const urlParts = url.split('/');

      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {
        id,
        picture,
        name,
      };
    });

    setSimplePokeList(newPokemonList);
    setIsFetching(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {isFetching, simplePokeList};
};
