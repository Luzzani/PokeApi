import {useEffect, useState} from 'react';
import {PokemonDetails} from '../interfaces/pokemonInterfaces';
import {pokemonApi} from '../api/pokemonApi';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonDetails>({} as PokemonDetails); // as PokemonDetails para evitar que tire error y en vez de eso reporte undefined
  const loadPokemon = async () => {
    const resp = await pokemonApi.get<PokemonDetails>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    setPokemon(resp.data);
    setIsLoading(false);
  };
  useEffect(() => {
    loadPokemon();
  }, []);

  return {isLoading, pokemon};
};
