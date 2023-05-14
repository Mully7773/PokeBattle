import { useQuery } from '@tanstack/react-query';
import { randomNumberGenerator } from '../utils/randomNumberGenerator';
import { CONSTANTS } from '../constants/constants';

const fetchPokemonData = async () => {
  const randomPokemon = randomNumberGenerator(CONSTANTS.POKECOUNT);
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
  );
  const data = await response.json();

  const speciesResponse = await fetch(data.species.url);

  const speciesData = await speciesResponse.json();
  console.log(speciesData);
  return { ...data, ...speciesData };
};

export const usePokemonData = () => {
  return useQuery({
    queryKey: ['pokemon'],
    queryFn: fetchPokemonData,
    enabled: false,
  });
};
