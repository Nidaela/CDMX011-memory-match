const Cards = (pokemonInfo, flipCard, checkForMatch, index) => {
    // console.log(pokemonInfo.image)
    const myDiv = document.createElement('div');
    const pokemonImage = document.createElement('img');

    myDiv.className = 'Card'; // 'Card'/'Card active' = Card interaction
    myDiv.dataset.id = pokemonInfo.id;
    myDiv.dataset.idx =  index;
    pokemonImage.src = pokemonInfo.image;
    myDiv.appendChild(pokemonImage)

    myDiv.addEventListener('click', flipCard)
    myDiv.addEventListener('click', checkForMatch)

    return myDiv;
};

export default Cards;
