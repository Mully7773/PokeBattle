const PokeCard = () => {
  return (
    <div className="rounded-2xl h-96 w-80 p-5 bg-gradient-to-br from-fuchsia-500 via-pink-400 to-yellow-200">
      <div rounded-sm>
        <div className="bg-slate-500 flex justify-center items-center">
          <img className="h-24 w-24" src="https://placehold.jp/150x150.png" />
        </div>
        <div>
          <h1>espeon</h1>
          <ul>
            <li>hp</li>
            <li>attack</li>
            <li>defense</li>
            <li>special attack</li>
            <li>special defense</li>
            <li>speed</li>
          </ul>
          <div>
            <div>
              <h2>Ability</h2>
              <p>Synchronize</p>
            </div>
            <div>
              <h2>Hidden Ability</h2>
              <p>Magic Bounce</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
