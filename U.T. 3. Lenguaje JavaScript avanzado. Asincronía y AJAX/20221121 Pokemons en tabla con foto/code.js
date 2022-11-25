document.addEventListener('DOMContentLoaded', setup);

function setup(e) {
    retrieveAndFillTablePokemons();
}

function retrieveAndFillTablePokemons() {
    const url = 'https://pokeapi.co/api/v2/pokemon/';

    fetch(url)
        .then(response => response.json())
        .then(({ results }) => fillTablePokemons(results))
        .catch(console.error);

    function fillTablePokemons(pokemons) {
        const nTbody = document.querySelector('#tTabPokemons>tbody');

        pokemons.forEach(createRowWithPokemon);

        function createRowWithPokemon({ name, url }) {
            const nTr = document.createElement('tr');
            nTbody.appendChild(nTr);

            const nTdNombre = document.createElement('td');
            nTr.appendChild(nTdNombre);

            const nText = document.createTextNode(name);
            nTdNombre.appendChild(nText);

            retrieveAndShowPhoto();

            function retrieveAndShowPhoto() {
                const nTdImg = document.createElement('td');
                nTr.appendChild(nTdImg);

                const nImg = document.createElement('img');
                nTdImg.appendChild(nImg);

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        const path = data.sprites.front_default;
                        nImg.src = path;
                    })
                    .catch(console.error);
            }
        }
    }
}