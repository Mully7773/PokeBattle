const App = () => {
  return (
    <>
      <section className="space-y-8 bg-green-400 ">
        <div className="p-6 mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-x-8  max-w-lg">
          <div className="shrink-0">
            <h1>Test</h1>
          </div>
          <div className="text-xl font-medium text-black">
            ChatChit
            <p className="text-slate-500">You have a new message!</p>
          </div>
        </div>
        <div className="flex space-x-8 bg-white space-y-2 sm:py-4  shadow-lg  py-8 px-8 items-center rounded-xl mx-auto max-w-sm">
          <div className="shrink-0">
            <img
              className="block mx-auto rounded-full w-20 h-20"
              src="https://placehold.jp/150x150.png"
            />
          </div>
          <div className="space-y-1">
            <h1 className="font-semibold text-lg text-black">Erin Linford</h1>
            <h2 className="text-slate-500 font-medium">Product Engineer</h2>
            <button className="text-sm hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 border border-purple-200  font-semibold text-purple-600 rounded-full px-4 py-1">
              Message
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
