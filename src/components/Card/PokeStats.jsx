// const PokeStats = ({ stat }) => {
//   const statKeys = Object.keys(stat).filter(key => key !== 'id');
//   console.log(statKeys);
//   console.log(stat);
//   const allKeys = statKeys.reduce((acc, curr) => {
//     return acc.concat(curr);
//   }, []);
//   console.log(allKeys);
//   return (
//     <>
//       {stat.map((key, index) => (
//         <li
//           key={key}
//           className={`${index % 2 === 0 ? 'uppercase' : 'capitalize'} `}
//         >
//           {key}
//           <span className='font-semibold'>{stat[key]}</span>
//         </li>
//       ))}
//     </>
//   );
// };

// export default PokeStats;

const PokeStats = ({ stat, index }) => {
  return (
    <>
      <li
        className={`${index === 2 ? 'ml-auto' : ''} ${
          index === 3 ? 'ml-auto' : ''
        } ${
          index === 0 ? 'col-span-full place-self-center' : ''
        } flex gap-2 capitalize `}
      >
        {stat.stat.name}
        <span className='font-semibold'>{stat.base_stat}</span>
      </li>
    </>
  );
  //   console.log(stats);
  //   return (
  //     <>
  //       {stats.map(stat => {
  //         return (
  //           <>
  //             <li>{stat.stat.name}</li>
  //             <span>{stat.base_stat}</span>
  //           </>
  //         );
  //       })}
  //     </>
  //   );
};

export default PokeStats;
