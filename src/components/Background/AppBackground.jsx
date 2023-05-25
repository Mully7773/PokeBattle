import { Toaster } from 'react-hot-toast';
import { usePokemonData } from '../../hooks/usePokemonData';

const AppBackground = ({ children }) => {
  const { isError } = usePokemonData();
  return (
    <section className=' place-items-center h-screen bg-slate-400 mx-auto grid grid-cols-2'>
      {children}
      {isError && <Toaster position='bottom-right' />}
    </section>
  );
};

export default AppBackground;
