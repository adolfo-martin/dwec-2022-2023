document.addEventListener('DOMContentLoaded', setup);

function setup(e) {
    const nSelect = document.querySelector('#tSelBooks');
    nSelect.addEventListener('change', retrieveAndShowDishes);

    retrieveAndShowBooks();
}

function retrieveAndShowBooks() {
    const url = 'http://localhost/controlador.php?operacion=obtener_libros';

    fetch(url)
        .then(response => response.json())
        .then(data => showBooks(data.libros))
        .catch(console.error);

    function showBooks(books) {
        const nSelect = document.querySelector('#tSelBooks');

        for (const book of books) {
            const nOption = document.createElement('option');
            nSelect.appendChild(nOption);
            nOption.setAttribute('value', book.clave);

            const nText = document.createTextNode(book.titulo);
            nOption.appendChild(nText);
        }
    }
}

function retrieveAndShowDishes(e) {
    // const nSelect = document.querySelector('#tSelBooks');
    const nSelect = e.target;
    const bookId = nSelect.value;

    retrieveDishesPromise(bookId)
        .then(showDishes)
        .catch(console.error);

    function retrieveDishesPromise(bookId) {
        const url = `http://127.0.0.1/controlador.php?operacion=obtener_platos&libro=${bookId}`;

        return fetch(url)
            .then(response => response.json())
            .then(data => data.platos)
    }

    function showDishes(dishes) {
        const nTable = document.querySelector('#tTabDishes');

        // nTable.textContent = '';
        // nTable.innerText = '';
        // nTable.innerHTML = '';
        while (nTable.hasChildNodes()) {
            nTable.removeChild(nTable.firstChild);
        }

        for (const dish of dishes) {
            const nTr = document.createElement('tr');
            nTable.appendChild(nTr);
            nTr.setAttribute('data-recipe', dish.clave);
            nTr.addEventListener('click', retrieveAndShowRecipe);

            const nTdPhoto = document.createElement('td');
            nTr.appendChild(nTdPhoto);

            const nImg = document.createElement('img');
            nTdPhoto.appendChild(nImg);
            nImg.setAttribute('src', `http://127.0.0.1/fotos/${dish.foto}`);

            const nTdText = document.createElement('td');
            nTr.appendChild(nTdText);

            const nText = document.createTextNode(dish.nombre);
            nTdText.appendChild(nText);
        }
    }
}

function retrieveAndShowRecipe(e) {
    const recipeId = e.target.dataset.recipe;

    const url = `http://127.0.0.1/controlador.php?operacion=obtener_receta&plato=${recipeId}`;

    fetch(url)
        .then(response => response.json())
        .then(data => showRecipe(data.receta))
        .catch(console.error);

    function showRecipe(recipe) {
        const nParRecipe = document.querySelector('#tParRecipe');

        const nText = document.createTextNode(recipe);
        nParRecipe.appendChild(nText);
    }
}