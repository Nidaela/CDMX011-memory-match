const Cards = (pokemonInfo, flipCard) => {
    // console.log(pokemonInfo.image)
    const myDiv = document.createElement('div');
    const pokemonImage = document.createElement('img');

    myDiv.className = 'Card'; // 'Card'/'Card active' = Card interaction
    pokemonImage.src = pokemonInfo.image;
    myDiv.appendChild(pokemonImage)

    myDiv.addEventListener('click', flipCard)

    return myDiv;
};

export default Cards;
