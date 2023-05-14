import PokeStats from './PokeStats';

const PokeCard = ({ pokemonInfo }) => {
  console.log(pokemonInfo.stats);
  return (
    <div className='rounded-2xl h-fit w-fit p-5 bg-gradient-to-br from-fuchsia-500 via-pink-400 to-yellow-200'>
      <div className='rounded-sm flex flex-col'>
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
      </div>
    </div>
  );
};

export default PokeCard;
