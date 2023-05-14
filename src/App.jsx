import AppBackground from './components/Background/AppBackground';
import PokeCard from './components/Card/PokeCard';
import DrawCardBtn from './components/UI/DrawCardBtn';
import { pokeData } from './pokeData';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

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
