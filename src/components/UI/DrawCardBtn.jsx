import { usePokemonData } from '../../hooks/usePokemonData';

const DrawCardBtn = () => {
  const { refetch } = usePokemonData();
  return (
    <button className='p-14 bg-white text-lg' onClick={refetch}>
      Draw card
    </button>
  );
};

export default DrawCardBtn;
