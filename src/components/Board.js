import data from '../data/pokemon/pokemon.js';
import Cards from "./Cards.js";

const pokemonArray = data.items;
const duplicateData = pokemonArray.concat(pokemonArray);


const Board = () => {
    const div = document.createElement('div');

    function flipCard() {
    this.classList.toggle('Card');
    }

    div.className = 'Board';
    duplicateData.forEach(eachPokemon => div.appendChild(Cards(eachPokemon, flipCard)));

    return div;
};

export default Board;