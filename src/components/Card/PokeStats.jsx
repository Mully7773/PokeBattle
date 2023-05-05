const PokeStats = ({ stat, index }) => {
  return (
    <>
      <li
        className={`${index === 2 ? 'ml-auto' : ''} ${
          index === 3 ? 'ml-auto' : ''
        } ${
          index === 0 ? 'col-span-full place-self-center' : ''
        } flex gap-2 capitalize text-lg`}
      >
        {stat.statImage && <img className='h-6' src={stat.statImage} />}
        <span className='font-semibold'>{stat.base_stat}</span>
      </li>
    </>
  );
};

export default PokeStats;
