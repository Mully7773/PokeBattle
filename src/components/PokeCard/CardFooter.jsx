const CardFooter = ({ pokemon }) => {
  return (
    <footer className='flex pt-4 px-5 '>
      <div className='capitalize'>
        <h2 className='uppercase text-xs font-secondary'>ability</h2>
        <p className='font-semibold'>
          {pokemon?.abilities[0]?.ability?.name || 'None'}
        </p>
      </div>
      <div className='ml-auto capitalize'>
        <h2 className='uppercase text-xs font-secondary'>hidden ability</h2>
        <p className='font-semibold'>
          {pokemon?.abilities[1]?.ability?.name || 'None'}
        </p>
      </div>
    </footer>
  );
};

export default CardFooter;
