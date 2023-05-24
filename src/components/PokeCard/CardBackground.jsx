import { getColorByPokemonType } from '../../utils/getColorByPokemonType';

const CardBackground = ({ children, pokemon }) => {
  const pokemonTypes = pokemon.types.map(type => type.type.name);
  let gradientColorTop = getColorByPokemonType(pokemonTypes[0]);
  let gradientColorBottom = getColorByPokemonType(pokemonTypes[1]);
  if (pokemonTypes.length === 1) {
    gradientColorBottom = gradientColorTop;
  }
  // return <div className='pt-2 pb-2 bg-card-bg-fire bg-cover'>{children}</div>;
  return (
    <div
      className='pt-2 pb-2 bg-cover bg-center'
      style={{
        background: `linear-gradient(${gradientColorTop},  ${gradientColorBottom}), url('/card-bg.webp')`,
      }}
    >
      {children}
    </div>
  );
};

export default CardBackground;
