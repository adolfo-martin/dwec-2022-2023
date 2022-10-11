'use strict';

const nTable = document.getElementById('tTabPokemons');

for (const pokemon of pokemons) {
    const nTr = document.createElement('tr');
    nTable.appendChild(nTr);

    const nTdNombre = document.createElement('td');
    nTr.appendChild(nTdNombre);
    const nTextNombre = document.createTextNode(pokemon.name);
    nTdNombre.appendChild(nTextNombre);

    const nTdUrl = document.createElement('td');
    nTr.appendChild(nTdUrl);

    const nA = document.createElement('a');
    nTdUrl.appendChild(nA);
    nA.setAttribute('href', pokemon.url);

    const nTextUrl = document.createTextNode(pokemon.url);
    nA.appendChild(nTextUrl);
}