import PokeStats from './PokeStats';

const PokeCard = ({ pokemonInfo }) => {
  console.log(pokemonInfo.stats);
  return (
    <div className='rounded-2xl h-fit w-fit p-4 bg-gradient-to-br from-amber-500 to-amber-300 shadow-xl'>
      <div className='pt-2 pb-2 bg-card-bg-fire bg-cover'>
        <header className='mx-5 flex'>
          <h1 className='capitalize font-bold text-lg'>
            {pokemonInfo.pokemonName}
          </h1>
          <div className='ml-auto uppercase flex gap-x-1 font-bold font-secondary text-lg text-red-600'>
            <span>{pokemonInfo.stats[0].base_stat}</span>
            <span>{pokemonInfo.stats[0].stat.name}</span>
          </div>
        </header>
        <div className=' mx-5 relative bg-gradient-to-br from-yellow-600 via-yellow-300 via-65% to-yellow-400 p-1.5 shadow-3xl'>
          <div className='bg-orange-300 flex justify-center items-center px-24 py-12 '>
            <img className='h-24 w-24' src={pokemonInfo.pokemonSprite} />
          </div>
        </div>
        <div className='flex gap-2 italic font-semibold text-[0.65rem] text-xs justify-center bg-gradient-to-r from-amber-500 via-yellow-200 to-amber-400 mx-auto w-fit px-4 py-[.1rem] mt-1 leading-none tracking-wide'>
          <h2>Psychic Pokemon</h2>
          <span>Height: 29</span>
          <span>Weight: 206 lbs</span>
        </div>

        <main className='px-5 py-4 flex flex-col gap-y-5 divide-y-2 divide-neutral-700 '>
          <ul className='py-2  font-secondary grid grid-cols-2 grid-rows-3 gap-y-4 gap-x-8 capitalize'>
            {pokemonInfo.stats
              .filter((stat, i) => i !== 0)
              .map((stat, index) => {
                return <PokeStats key={index} stat={stat} index={index} />;
              })}
          </ul>
          <footer className='flex pt-4'>
            <div className='capitalize'>
              <h2 className='uppercase text-xs font-secondary'>ability</h2>
              <p className='font-semibold'>{pokemonInfo.ability}</p>
            </div>
            <div className='ml-auto capitalize'>
              <h2 className='uppercase text-xs font-secondary'>
                hidden ability
              </h2>
              <p className='font-semibold'>{pokemonInfo.hiddenAbility}</p>
            </div>
          </footer>
        </main>
      </div>
      {/* <div className='flex flex-col'>
        <header className='relative bg-gradient-to-br from-yellow-400  to-yellow-100 p-2 rounded-t-md'>
          <div className='bg-fuchsia-900 flex justify-center items-center px-24 py-12'>
            <img className='h-24 w-24' src={pokemonInfo.pokemonSprite} />
          </div>
          <div className='z-10 rounded-sm h-fit w-fit py-1 px-4 absolute bottom-0 left-4 translate-y-1/2 bg-gradient-to-tl from-pink-300 to-fuchsia-400'>
            <span className='capitalize font-semibold font-secondary'>
              {pokemonInfo.pokemonType}
            </span>
          </div>
        </header>
        <main className='p-4 flex flex-col gap-3 bg-white bg-opacity-50 rounded-b-md'>
          <h1 className='text-center capitalize font-bold text-xl '>
            {pokemonInfo.pokemonName}
          </h1>
          <ul className='py-2 font-secondary grid grid-cols-2 grid-rows-3 gap-y-3 capitalize'>
            {pokemonInfo.stats.map((stat, index) => {
              return <PokeStats key={index} stat={stat} index={index} />;
            })}
          </ul>
          <div className='flex '>
            <div className='capitalize'>
              <h2 className='uppercase text-xs font-secondary'>ability</h2>
              <p className='font-semibold'>{pokemonInfo.ability}</p>
            </div>
            <footer className='ml-auto capitalize'>
              <h2 className='uppercase text-xs font-secondary'>
                hidden ability
              </h2>
              <p className='font-semibold'>{pokemonInfo.hiddenAbility}</p>
            </footer>
          </div>
        </main>
      </div> */}
    </div>
  );
};

export default PokeCard;
