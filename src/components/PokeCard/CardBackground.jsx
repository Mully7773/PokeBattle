const getColorByPokemonType = type => {
  switch (type) {
    case 'bug':
      return 'rgba(167, 182, 32, 0.45)';
    case 'steel':
      return 'rgba(114, 121, 126, 0.45)';
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
