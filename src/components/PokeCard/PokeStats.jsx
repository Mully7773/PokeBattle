const PokeStats = ({ stat, index }) => {
  console.log(stat.stat.name);
  // const attackAbbreviation = 'Sp. Atk';
  // const defenseAbbreviation = 'Sp. Def';

  // if (stat.stat.name === 'special-attack') {
  //   stat.stat.name = attackAbbreviation;
  // }
  // if (stat.stat.name === 'special-defense') {
  //   stat.stat.name = defenseAbbreviation;
  // }

  let imgSrc;
  switch (stat.stat.name) {
    case 'attack':
      imgSrc = '/src/assets/attack.svg';
      break;
    case 'defense':
      imgSrc = '/src/assets/defense-V2.svg';
      break;
    case 'special-attack':
      imgSrc = '/src/assets/special-attack.svg';
      break;
    case 'special-defense':
      imgSrc = '/src/assets/special-defense-V2.svg';
      break;
    case 'speed':
      imgSrc = '/src/assets/speed.svg';
      break;
    default:
      imgSrc = '';
  }
  return (
    <>
      <li
        className={`${index === 2 ? 'ml-auto' : ''} ${
          index === 3 ? 'ml-auto' : ''
        } ${index === 0 ? 'col-span-full place-self-center' : ''} `}
      >
        <div
          className={`flex items-center leading-none gap-2 relative h-[4rem] w-fit ${
            index === 2 || index === 4 ? 'flex-row-reverse' : ''
          }
          ${index === 0 ? 'flex-col gap-[.1rem]' : ''} `}
        >
          <img
            className={` h-10 w-10 opacity-50 
            `}
            src={imgSrc}
          />
          {/* <span className='z-10'>{stat.stat.name}</span> */}
          <span
            className={`z-10 tracking-tighter text-inherit font-primary ${
              stat.base_stat > 99 ? 'text-[1.7rem] font-medium' : 'text-3xl'
            }`}
          >
            {stat.base_stat}
          </span>
        </div>
      </li>
    </>
  );
};

export default PokeStats;
