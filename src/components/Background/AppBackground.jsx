const AppBackground = ({ children }) => {
  return (
    <section className=' place-items-center h-screen bg-slate-400 mx-auto grid grid-cols-2'>
      {children}
    </section>
  );
};

export default AppBackground;
