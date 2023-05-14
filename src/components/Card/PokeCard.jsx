import PokeStats from './PokeStats';
import { usePokemonData } from '../../hooks/usePokemonData';
import DrawCardBtn from '../UI/DrawCardBtn';

const PokeCard = ({ pokemonInfo }) => {
  const { data: pokemon } = usePokemonData();
  const genera = pokemon?.genera;
  console.log(genera);
  const genus = genera?.find(g => g.language.name === 'en')?.genus;
  console.log(genus);

  console.log('POKEMON', pokemon);
  const isDreamWorldImageAvailable =
    pokemon?.sprites?.other?.dream_world?.front_default;
  const imgSource = isDreamWorldImageAvailable
    ? pokemon.sprites.other.dream_world.front_default
    : pokemon?.sprites?.other?.['official-artwork']?.front_default;
  return (
    <>
      {pokemon && (
        <div className='rounded-2xl h-fit w-fit p-4 bg-gradient-to-br from-amber-500 to-amber-300 shadow-xl'>
          <div className='pt-2 pb-2 bg-card-bg-fire bg-cover'>
            <header className='mx-5 flex'>
              <h1 className='capitalize font-bold text-lg'>{pokemon?.name}</h1>
              <div className='ml-auto uppercase flex gap-x-1 font-bold font-secondary text-lg text-red-600 items-center justify-center'>
                <span>{pokemon?.stats[0].base_stat}</span>
                <span>{pokemon?.stats[0].stat.name}</span>
                <span>
                  <img
                    className='w-4 mb-1'
                    src='/src/assets/pokemonTypes/fire.svg'
                    alt='Pokemon type icon'
                  />
                </span>
              </div>
            </header>
            <section className='mx-5'>
              <figure className='relative bg-gradient-to-br from-yellow-600 via-yellow-300 via-65% to-yellow-400 p-1.5 shadow-3xl '>
                <div className='bg-orange-300 px-24 py-12'>
                  <img
                    className={
                      isDreamWorldImageAvailable
                        ? 'h-24 w-24 scale-150'
                        : 'h-24 w-24 scale-[1.7]'
                    }
                    src={imgSource}
                    alt={pokemon?.name}
                  />
                </div>
                {/* inset-x-0 sets the left and right properties of the element to 0, making it fill the entire parent container horizontally.  */}
                <figcaption className='absolute inset-x-0 flex items-center translate-y-2  gap-2 italic font-semibold text-[0.649rem] text-xs justify-center bg-gradient-to-r from-amber-500 via-yellow-200 to-amber-400 mx-auto w-fit px-4 py-[.1rem] mt-[.2rem] leading-none tracking-wide'>
                  <h2 className='capitalize'>{genus}</h2>
                  <span>Ht: {pokemon?.height * 10} cm</span>
                  <span>Wt: {pokemon?.weight} lbs</span>
                </figcaption>
              </figure>
            </section>

            <main className='px-5 py-4 flex flex-col gap-y-2 divide-y-2 divide-neutral-700 '>
              <ul className='py-2 mt-3 font-secondary grid grid-cols-2 grid-rows-3  gap-x-8 capitalize'>
                {pokemon?.stats
                  .filter((stat, i) => i !== 0)
                  .map((stat, index) => {
                    return <PokeStats key={index} stat={stat} index={index} />;
                  })}
              </ul>
              <footer className='flex pt-4'>
                <div className='capitalize'>
                  <h2 className='uppercase text-xs font-secondary'>ability</h2>
                  <p className='font-semibold'>
                    {pokemon?.abilities[0]?.ability?.name || 'None'}
                  </p>
                </div>
                <div className='ml-auto capitalize'>
                  <h2 className='uppercase text-xs font-secondary'>
                    hidden ability
                  </h2>
                  <p className='font-semibold'>
                    {pokemon?.abilities[1]?.ability?.name || 'None'}
                  </p>
                </div>
              </footer>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default PokeCard;
