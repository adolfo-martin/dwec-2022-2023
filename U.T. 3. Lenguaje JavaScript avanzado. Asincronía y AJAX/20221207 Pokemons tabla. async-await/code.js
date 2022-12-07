import { retrievePokemons, retrieveImageFromUrl } from './pokemons-lib.js';

document.addEventListener('DOMContentLoaded', setup);

async function setup(e) {
    const pokemons = await retrievePokemons();
    fillTablePokemons(pokemons);
}


function fillTablePokemons(pokemons) {
    const nTbd = document.querySelector('#tTabPokemons>tbody');

    pokemons.forEach(createRow);

    async function createRow(pokemon) {
        const nTr = document.createElement('tr');
        nTbd.appendChild(nTr);

        const nTdName = document.createElement('td');
        nTr.appendChild(nTdName);

        const nText = document.createTextNode(pokemon.name);
        nTdName.appendChild(nText);

        const nTdImage = document.createElement('td');
        nTr.appendChild(nTdImage);

        const imagePath = await retrieveImageFromUrl(pokemon.url);

        const nImg = document.createElement('img');
        nTdImage.appendChild(nImg);
        nImg.setAttribute('src', imagePath)
    }
}