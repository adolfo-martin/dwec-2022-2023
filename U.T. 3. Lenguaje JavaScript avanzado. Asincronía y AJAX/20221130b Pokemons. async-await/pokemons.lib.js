document.addEventListener('DOMContentLoaded', setup);

async function setup(e) {
    const pokemons = await retrievePokemons();
    console.log(pokemons);
    fillPokemonsList(pokemons);
}

async function retrievePokemons() {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const response = await fetch(url);
    const data = await response.json();
    const pokemons = data.results;
    return pokemons;
}

function fillPokemonsList(pokemons) {
    const nOl = document.querySelector('#tOlPokemons');

    pokemons.forEach(pokemon => {
        const nLi = document.createElement('li');
        nOl.appendChild(nLi);

        const nText = document.createTextNode(pokemon.name);
        nLi.appendChild(nText);
    });
}