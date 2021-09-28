import data from '../data/pokemon/pokemon.js';
import Cards from "./Cards.js";

const pokemonArray = data.items;
const duplicateData = pokemonArray.concat(pokemonArray);


const Board = () => {
    const div = document.createElement('div');

    div.className = 'Board';
    duplicateData.forEach(eachPokemon => div.appendChild(Cards(eachPokemon)));
    duplicateData.document.querySelectorAll('.Card');

    function flipCard() {
        this.classList.toggle('flip');
    }

    duplicateData.forEach(Cards => Cards.addEventListener('click', flipCard));

    return div;
};

export default Board;