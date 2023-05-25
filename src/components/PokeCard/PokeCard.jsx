import { usePokemonData } from '../../hooks/usePokemonData';
import CardHeader from './CardHeader';
import CardIllustration from './CardIllustration';
import CardFooter from './CardFooter';
import CardMain from './CardMain';
import CardBorder from './CardBorder';
import CardBackground from './CardBackground';

const PokeCard = () => {
  const { data: pokemon, isError, error, isLoading } = usePokemonData();

  console.log('POKEMON', pokemon);

  if (isError) {
    return <h1>An error occurred: {error.message}</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {pokemon && (
        <CardBorder>
          <CardBackground pokemon={pokemon}>
            <CardHeader pokemon={pokemon} />
            <CardIllustration pokemon={pokemon} />
            <CardMain pokemon={pokemon} />
            <CardFooter pokemon={pokemon} />
          </CardBackground>
        </CardBorder>
      )}
      {!pokemon && <h1>Click the button...</h1>}
    </>
  );
};

export default PokeCard;
