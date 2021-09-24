import Board from "./Board.js";

const Main = () => {
    const main = document.createElement('main');

    main.appendChild(Board());
    
    return main;
};

export default Main;