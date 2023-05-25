import { useQuery } from '@tanstack/react-query';
import { randomNumberGenerator } from '../utils/randomNumberGenerator';
import { CONSTANTS } from '../constants/constants';

const fetchPokemonData = async () => {
  try {
    const randomPokemon = randomNumberGenerator(CONSTANTS.POKECOUNT);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon1/${randomPokemon}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch Pokemon data');
    }

    const data = await response.json();

    const speciesResponse = await fetch(data.species.url);
    if (!speciesResponse.ok) {
      throw new Error('Failed to fetch Pokemon species data');
    }
    const speciesData = await speciesResponse.json();
    return { ...data, ...speciesData };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const usePokemonData = () => {
  return useQuery({
    queryKey: ['pokemon'],
    queryFn: fetchPokemonData,
    enabled: false,
    useErrorBoundary: error => error.response?.status >= 500,
  });
};
