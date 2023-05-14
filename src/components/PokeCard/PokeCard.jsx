import { usePokemonData } from '../../hooks/usePokemonData';
import CardHeader from './CardHeader';
import CardIllustration from './CardIllustration';
import CardFooter from './CardFooter';
import CardMain from './CardMain';
import CardBorder from './CardBorder';
import CardBackground from './CardBackground';

const PokeCard = () => {
  const { data: pokemon } = usePokemonData();

  console.log('POKEMON', pokemon);

  return (
    <>
      {pokemon && (
        <CardBorder>
          <CardBackground>
            <CardHeader pokemon={pokemon} />
            <CardIllustration pokemon={pokemon} />
            <CardMain pokemon={pokemon} />
            <CardFooter pokemon={pokemon} />
          </CardBackground>
        </CardBorder>
      )}
    </>
  );
};

export default PokeCard;
