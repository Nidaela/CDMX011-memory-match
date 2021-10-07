import data from '../data/pokemon/pokemon.js';
import Cards from "./Cards.js";

const pokemonArray = data.items;
const duplicateData = pokemonArray.concat(pokemonArray);


const Board = () => {
    let selectedItems = [];
    let arrayIdx = [];
    
    const div = document.createElement('div');

    function flipCard(event) {
        console.log(event.target);
        let selectedElement = event.currentTarget;
        let selectedId = event.currentTarget.dataset.id;
        let selectedIdx = event.currentTarget.dataset.idx;
        selectedItems.push(selectedId);
        arrayIdx.push(selectedIdx);
        selectedElement.classList.toggle('active');
    }

    function checkForMatch() { 
        if (selectedItems[0] === selectedItems[1]) { 
        const elementA = document.querySelector(`[data-idx = '${arrayIdx[0]}']`)
        const elementB = document.querySelector(`[data-idx = '${arrayIdx[1]}']`)
        //const elements = document.querySelectorAll(`[data-id = '${selectedItems[0]}']`).style.pointerEvents = 'none';
        elementA.style.pointerEvents = 'none';
        elementB.style.pointerEvents = 'none';
        selectedItems = [];
        arrayIdx = [];
}
        else if (selectedItems.length === 2 && selectedItems[0] !== selectedItems[1]){
            const elementA = document.querySelector(`[data-idx = '${arrayIdx[0]}']`)
            const elementB = document.querySelector(`[data-idx = '${arrayIdx[1]}']`)
            selectedItems = [];
            arrayIdx = [];
            setTimeout(() => {
                elementA.classList.toggle('active');
                elementB.classList.toggle('active');
            }, 2000);
        } 
        // let selectedElement = event.currentTarget
        // selectedElement.classList.toggle('active');
}

   div.className = 'Board';
   duplicateData.forEach((eachPokemon, index)  => div.appendChild(Cards(eachPokemon, flipCard, checkForMatch, index)));
    
   return div;
};

export default Board;