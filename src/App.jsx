import AppBackground from './components/Background/AppBackground';
import PokeCard from './components/PokeCard/PokeCard';
import DrawCardBtn from './components/UI/DrawCardBtn';
import { pokeData } from './pokeData';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { toast, Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: error => toast.error(`Something went wrong: ${error.message}`),
  }),
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppBackground>
        {pokeData.map(pokemon => {
          return <PokeCard key={pokemon.id} pokemonInfo={pokemon} />;
        })}
        <DrawCardBtn />
      </AppBackground>
    </QueryClientProvider>
  );
};

export default App;
