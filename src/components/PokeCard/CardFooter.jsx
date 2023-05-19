const CardFooter = ({ pokemon }) => {
  const pokemonFlavorText = pokemon?.flavor_text_entries;
  // Find the flavor text that is English
  const englishPokemonFlavorText = pokemonFlavorText?.find(
    text => text.language.name === 'en'
  );
  // Get rid of upward arrow caused by escaping character - replace it with a space, and convert ability and Pokemon names to lowercase and capitalized forms respectfully
  const adjustedFlavorText = englishPokemonFlavorText?.flavor_text
    .replace(/\f/g, ' ')
    .replace(/\b[A-Z]+\b/g, (match, offset) => {
      if (offset === 0) {
        // Preserve the first character as uppercase
        return match;
      } else {
        // Convert subsequent uppercase words to lowercase
        return match.toLowerCase();
      }
    });
  console.log(adjustedFlavorText);
  return (
    <footer className='grid grid-cols-2 grid-rows-2 pt-2 px-5 '>
      <div className='capitalize'>
        <h2 className='uppercase text-xs font-secondary leading-none'>
          ability
        </h2>
        <p className='font-semibold leading-none'>
          {pokemon?.abilities[0]?.ability?.name || 'None'}
        </p>
      </div>
      <div className='pb-2 ml-auto capitalize'>
        <h2 className='uppercase text-xs font-secondary leading-none'>
          hidden ability
        </h2>
        <p className='font-semibold leading-none'>
          {pokemon?.abilities[1]?.ability?.name || 'None'}
        </p>
      </div>
      <div className='col-span-full place-self-center w-72  outline-offset-2 outline-2 outline-amber-500 outline '>
        <p
          className={`text-[0.64rem] font-medium italic py-[.1rem] px-2 leading-[.7rem] ${
            pokemon?.flavor_text_entries[0]?.flavor_text.length > 120
              ? 'text-[0.5rem]'
              : 'text-[0.64rem]'
          }`}
        >
          {adjustedFlavorText ||
            'No supplementary information on this Pokemon is available yet.'}{' '}
          <span className='text-[0.64rem] font-bold'>#{pokemon?.id}</span>
        </p>
      </div>
    </footer>
  );
};

export default CardFooter;
