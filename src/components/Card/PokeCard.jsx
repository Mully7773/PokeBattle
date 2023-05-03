import PokeStats from './PokeStats';

const PokeCard = ({ pokemonInfo }) => {
  console.log(pokemonInfo.stats);
  return (
    <div className='rounded-2xl h-fit w-fit p-5 bg-gradient-to-br from-fuchsia-500 via-pink-400 to-yellow-200'>
      <div className='rounded-sm flex flex-col'>
        <div className='bg-gradient-to-br from-yellow-400  to-yellow-100 p-2 rounded-sm'>
          <div className='bg-fuchsia-900 flex justify-center items-center px-24 py-12'>
            <img className='h-24 w-24' src={pokemonInfo.pokemonSprite} />
          </div>
        </div>
        <div className='pt-4 flex flex-col gap-3'>
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
              <p className='font-semibold'>synchronize</p>
            </div>
            <div className='ml-auto capitalize'>
              <h2 className='uppercase text-xs font-secondary'>
                hidden ability
              </h2>
              <p className='font-semibold'>magic bounce</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
