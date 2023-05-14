const CardBorder = ({ children }) => {
  return (
    <div className='rounded-2xl h-fit w-fit p-4 bg-gradient-to-br from-amber-500 to-amber-300 shadow-xl'>
      {children}
    </div>
  );
};

export default CardBorder;
