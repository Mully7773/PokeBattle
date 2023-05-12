import { useQuery } from '@tanstack/react-query';
import { randomNumberGenerator } from '../utils/randomNumberGenerator';
import { CONSTANTS } from '../constants/constants';

const fetchPokemonData = async () => {
  const randomPokemon = randomNumberGenerator(CONSTANTS.POKECOUNT);
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/344`);
  console.log(response);
  const data = await response.json();
  return data;
};

export const usePokemonData = () => {
  return useQuery({ queryKey: ['pokemon'], queryFn: fetchPokemonData });
};
