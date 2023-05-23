const getColorByPokemonType = type => {
  switch (type) {
    case 'bug':
      return 'rgba(118, 129, 25, 0.40)';
    case 'dark':
      return 'rgba(68, 104, 94, 0.40)';
    case 'dragon':
      return 'rgba(73, 36, 161, 0.40)';
    case 'electric':
      return 'rgb(250, 224, 120, 0.40)';
    case 'steel':
      return 'rgba(75, 79, 83, 0.40)';
    default:
      return '#71797E';
  }
};

const CardBackground = ({ children, pokemon }) => {
  const pokemonTypes = pokemon.types.map(type => type.type.name);
  const gradientColorTop = getColorByPokemonType(pokemonTypes[0]);
  const gradientColorBottom = getColorByPokemonType(pokemonTypes[1]);
  // return <div className='pt-2 pb-2 bg-card-bg-fire bg-cover'>{children}</div>;
  return (
    <div
      className='pt-2 pb-2'
      style={{
        background: `linear-gradient(${gradientColorTop},  ${gradientColorBottom}), url('/card-bg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default CardBackground;
