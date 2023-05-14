const CardHeader = ({ pokemon }) => {
  return (
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
  );
};

export default CardHeader;
