import { Toaster, toast } from 'react-hot-toast';
import { usePokemonData } from '../../hooks/usePokemonData';

const DrawCardBtn = () => {
  const { refetch, isError } = usePokemonData();
  const fetchData = () => {
    if (isError) {
      toast.error('Something went wrong');
    } else {
      refetch();
    }
  };
  return (
    <>
      <button className='p-14 bg-white text-lg' onClick={fetchData}>
        Draw card
      </button>
      <Toaster position='bottom-right' />
    </>
  );
};

export default DrawCardBtn;
