// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);

import Title from "./Title.js";

const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.appendChild(Title());

  return el;
};

export default App;