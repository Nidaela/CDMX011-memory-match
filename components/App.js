import Title from "./Title.js";
import Main from "./Main.js";

const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.appendChild(Title());
  el.appendChild(Main());

  return el;
};

export default App;