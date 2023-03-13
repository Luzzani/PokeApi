import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {Result} from '../interfaces/pokemonInterfaces';
import {
  PokemonPaginatedResponse,
  SimplePokemon,
} from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [simplePokeList, setSimplePokeList] = useState<SimplePokemon[]>([]);
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon/?limit=40');

  const loadPokemons = async () => {
    setIsLoading(true);
    const resp = await pokemonApi.get<PokemonPaginatedResponse>(
      nextPageUrl.current,
    );
    nextPageUrl.current = resp.data.next;
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

    setSimplePokeList([...simplePokeList, ...newPokemonList]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {isLoading, simplePokeList, loadPokemons};
};
