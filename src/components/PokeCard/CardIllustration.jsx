const CardIllustration = ({ pokemon }) => {
  const genera = pokemon?.genera;
  const genus = genera?.find(g => g.language.name === 'en')?.genus;
  console.log(genus.length);

  const isDreamWorldImageAvailable =
    pokemon?.sprites?.other?.dream_world?.front_default;
  const imgSource = isDreamWorldImageAvailable
    ? pokemon.sprites.other.dream_world.front_default
    : pokemon?.sprites?.other?.['official-artwork']?.front_default;
  return (
    <section className='mx-5'>
      <figure className='relative bg-gradient-to-br from-yellow-600 via-yellow-300 via-65% to-yellow-400 p-1.5 shadow-3xl '>
        <div className='bg-orange-300 px-24 py-12'>
          <img
            className={
              isDreamWorldImageAvailable
                ? 'h-24 w-24 scale-150'
                : 'h-24 w-24 scale-[1.7]'
            }
            src={imgSource}
            alt={pokemon?.name}
          />
        </div>
        {/* inset-x-0 sets the left and right properties of the element to 0, making it fill the entire parent container horizontally.  */}
        <figcaption
          className={`absolute inset-x-0 flex items-center translate-y-2  gap-2 italic font-semibold justify-center bg-gradient-to-r from-amber-500 via-yellow-200 to-amber-400 mx-auto w-fit px-4 py-[.1rem] mt-[.2rem] leading-none tracking-wide ${
            genus.length > 16 ? 'text-[0.64rem]' : 'text-[0.649rem]'
          }`}
        >
          <h2 className='capitalize'>{genus}</h2>
          <span>Ht: {pokemon?.height * 10} cm</span>
          <span>Wt: {pokemon?.weight} lbs</span>
        </figcaption>
      </figure>
    </section>
  );
};

export default CardIllustration;
