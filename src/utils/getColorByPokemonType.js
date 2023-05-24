export const getColorByPokemonType = type => {
  switch (type) {
    case 'bug':
      return 'rgba(118, 129, 25, 0.40)';
    case 'dark':
      return 'rgba(68, 104, 94, 0.40)';
    case 'dragon':
      return 'rgba(73, 36, 161, 0.40)';
    case 'electric':
      return 'rgba(241, 202, 46, 0.4)';
    case 'fairy':
      return 'rgba(218, 24, 66, 0.40)';
    case 'fighting':
      return 'rgba(172, 12, 3, 0.4)';
    case 'fire':
      return 'rgba(255, 0, 0, 0.40)';
    case 'flying':
      return 'rgba(109, 94, 156, 0.40)';
    case 'ghost':
      return 'rgba(78, 36, 145, 0.45)';
    case 'grass':
      return 'rgba(78, 130, 52, 0.40)';
    case 'ground':
      return 'rgba(146, 125, 68, 0.40)';
    case 'ice':
      return 'rgba(99, 141, 141, 0.40)';
    case 'normal':
      return 'rgba(168, 168, 120, 0.40)';
    case 'poison':
      return 'rgba(104, 42, 104, 0.40)';
    case 'psychic':
      return 'rgba(161, 57, 89, 0.40)';
    case 'rock':
      return 'rgba(121, 103, 23, 0.4)';
    case 'steel':
      return 'rgba(75, 79, 83, 0.40)';
    case 'water':
      return 'rgba(68, 94, 156, 0.40)';
    default:
      return 'rgb(255, 255, 255, 0.40)';
  }
};
