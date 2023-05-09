import PokeCard from './components/Card/PokeCard';
import { pokeData } from './pokeData';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <section className=' place-items-center h-screen bg-slate-400 mx-auto grid grid-cols-2'>
        {pokeData.map(pokemon => {
          return <PokeCard key={pokemon.id} pokemonInfo={pokemon} />;
        })}
      </section>
    </QueryClientProvider>
  );
};

export default App;
