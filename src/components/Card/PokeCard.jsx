const PokeCard = () => {
  return (
    <div className='rounded-2xl h-fit w-fit p-5 bg-gradient-to-br from-fuchsia-500 via-pink-400 to-yellow-200'>
      <div rounded-sm flex flex-col>
        <div className='bg-gradient-to-br from-yellow-400  to-yellow-100 p-2 rounded-sm'>
          <div class='bg-fuchsia-900 flex justify-center items-center px-24 py-12'>
            <img className='h-24 w-24' src='https://placehold.jp/150x150.png' />
          </div>
        </div>
        <div className='pt-4 flex flex-col gap-3'>
          <h1 className='text-center capitalize font-bold text-xl '>espeon</h1>
          <ul className='py-2 font-secondary grid grid-cols-2 grid-rows-3 gap-y-3 capitalize'>
            <li className='uppercase'>
              hp <span className='font-semibold'>24</span>
            </li>
            <li className='ml-auto'>
              attack<span className='font-semibold'>25</span>
            </li>
            <li>
              defense <span className='font-semibold'>41</span>
            </li>
            <li className='ml-auto'>
              sp attack<span className='font-semibold'>102</span>
            </li>
            <li>
              sp defense <span className='font-semibold'>75</span>
            </li>
            <li className='ml-auto'>
              speed <span className='font-semibold'>100</span>
            </li>
          </ul>
          <div className='flex '>
            <div className='capitalize'>
              <h2 className='uppercase text-xs font-secondary'>ability</h2>
              <p className='font-semibold'>synchronize</p>
            </div>
            <div className='ml-auto capitalize'>
              <h2 className='uppercase text-xs font-secondary'>
                hidden ability
              </h2>
              <p className='font-semibold'>magic bounce</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
