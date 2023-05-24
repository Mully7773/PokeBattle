import { getColorByPokemonType } from '../../utils/getColorByPokemonType';
import { rgbaToHex } from '../../utils/rgbaToHex';

const CardIllustration = ({ pokemon }) => {
  const pokemonTypes = pokemon.types.map(type => type.type.name);
  let borderColor = getColorByPokemonType(pokemonTypes[0]);
  let backgroundColor = getColorByPokemonType(pokemonTypes[1]);
  const borderHex = rgbaToHex(borderColor);
  const backgroundHex = rgbaToHex(backgroundColor);
  console.log(backgroundHex);

  if (pokemonTypes.length === 1) {
    borderColor = backgroundColor;
  }

  const genera = pokemon?.genera;
  const genus = genera?.find(g => g.language.name === 'en')?.genus;
  console.log(genus.length);

  const isDreamWorldImageAvailable =
    pokemon?.sprites?.other?.dream_world?.front_default;
  const imgSource = isDreamWorldImageAvailable
    ? pokemon.sprites.other.dream_world.front_default
    : pokemon?.sprites?.other?.['official-artwork']?.front_default;
  return (
    <section className='mx-5'>
      <figure className='relative bg-gradient-to-br from-yellow-600 via-yellow-300 via-65% to-yellow-400 p-1.5 shadow-3xl '>
        <div
          className={`relative px-24 py-12 z-20 overflow-hidden`}
          style={{
            backgroundColor: `${
              pokemonTypes.length === 1 ? borderHex : backgroundHex
            }`,
          }}
          // style={{
          //   // background: `linear-gradient(rgba(255, 0, 0, 0.3),  rgba(255, 0, 0, 0.3)), url('/sparkle-texture.svg')`,
          //   backgroundImage: `url('/sparkle-texture.svg')`,
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'center',
          // }}
        >
          <img
            src='/sparkle-texture.svg'
            alt='sparkle texture'
            className='absolute left-0 top-0 right-0 bottom-0 w-full h-full object-cover z-20 opacity-60'
          />
          <div
            className={`absolute z-10 left-0 top-0 right-0 bottom-0 m-auto h-36 w-36 bg-transparent rounded-full  scale-[1.7]`}
            style={{
              border: `0.085rem solid ${
                pokemonTypes.length === 1 ? 'white' : borderHex
              }`,

              filter: 'blur(0.05rem)',
            }}
          >
            <div
              className='absolute left-0 top-0 right-0 bottom-0 m-auto h-36 w-36 rounded-full scale-75'
              style={{
                border: `0.09rem solid ${
                  pokemonTypes.length === 1 ? 'white' : borderHex
                }`,
              }}
            ></div>
          </div>
          <div className='relative z-50'>
            <img
              className={
                isDreamWorldImageAvailable
                  ? 'h-24 w-24 z-30 scale-150'
                  : 'h-24 w-24 z-30 scale-[1.7]'
              }
              src={imgSource}
              alt={pokemon?.name}
            />
          </div>
        </div>
        {/* inset-x-0 sets the left and right properties of the element to 0, making it fill the entire parent container horizontally.  */}
        <figcaption
          className={`absolute inset-x-0 flex items-center translate-y-2  gap-2 italic font-semibold justify-center bg-gradient-to-r from-amber-500 via-yellow-200 to-amber-400 mx-auto w-fit px-4 py-[.1rem] mt-[.2rem] leading-none tracking-wide ${
            genus.length > 16 ? 'text-[0.64rem]' : 'text-[0.649rem]'
          }`}
        >
          <h2 className='capitalize'>{genus}</h2>
          <span>Ht: {pokemon?.height * 10} cm</span>
          <span>Wt: {pokemon?.weight} lbs</span>
        </figcaption>
      </figure>
    </section>
  );
};

export default CardIllustration;
