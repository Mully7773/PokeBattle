const PokeStats = ({ stat, index }) => {
  console.log(stat.stat.name);
  const attackAbbreviation = 'Sp. Atk';
  const defenseAbbreviation = 'Sp. Def';

  if (stat.stat.name === 'special-attack') {
    stat.stat.name = attackAbbreviation;
  }
  if (stat.stat.name === 'special-defense') {
    stat.stat.name = defenseAbbreviation;
  }
  return (
    <>
      <li
        className={`${index === 2 ? 'ml-auto' : ''} ${
          index === 3 ? 'ml-auto' : ''
        } ${
          index === 0 ? 'col-span-full place-self-center' : ''
        } flex gap-2 capitalize text-lg`}
      >
        {/* {stat.statImage && <img className='h-6' src={stat.statImage} />} */}
        <div className='flex flex-col items-center gap-1 leading-none relative h-14 w-14 '>
          <img
            className='absolute opacity-60 h-14 w-14'
            src='/src/assets/attack.svg'
          />
          <span className='z-10'>{stat.stat.name}</span>
          <span className='z-10 font-semibold'>{stat.base_stat}</span>
        </div>
      </li>
    </>
  );
};

export default PokeStats;
