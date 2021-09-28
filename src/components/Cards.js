const Cards = (pokemonInfo) => {
    // console.log(pokemonInfo.image)
    const myDiv = document.createElement('div');
    const pokemonImage = document.createElement('img');

    myDiv.className = 'Card'; // 'Card'/'Card active' = Card interaction
    pokemonImage.src = pokemonInfo.image;
    myDiv.appendChild(pokemonImage)

    return myDiv;
};

export default Cards;
