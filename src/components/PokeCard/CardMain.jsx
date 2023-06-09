import PokeStats from './PokeStats';

const CardMain = ({ pokemon }) => {
  return (
    <main className='px-5 pt-4 flex flex-col gap-y-2 divide-y-2 divide-neutral-700 '>
      <ul className='mt-3 font-secondary grid grid-cols-2 auto-rows-min gap-x-8'>
        {pokemon?.stats
          .filter((stat, i) => i !== 0)
          .map((stat, index) => {
            return <PokeStats key={index} stat={stat} index={index} />;
          })}
      </ul>
      <div></div>
    </main>
  );
};

export default CardMain;
