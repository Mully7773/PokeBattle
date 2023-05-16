const CardHeader = ({ pokemon }) => {
  const pokemonTypes = pokemon.types.map(type => type.type.name);
  console.log(pokemonTypes);
  return (
    <header className='mx-5 flex'>
      <h1 className='capitalize font-bold text-lg'>{pokemon?.name}</h1>
      <div className='ml-auto uppercase flex gap-x-1 font-bold font-secondary text-lg text-red-600 items-center justify-center'>
        <span>{pokemon?.stats[0].base_stat}</span>
        <span>{pokemon?.stats[0].stat.name}</span>
        <div className='flex'>
          {pokemonTypes.map(type => {
            return (
              <img
                key={type}
                className='w-4 mb-1'
                src={`/src/assets/pokemonTypes/${type}.svg`}
                alt='Pokemon type icon'
              />
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default CardHeader;
