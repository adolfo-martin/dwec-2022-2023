document.addEventListener("DOMContentLoaded", setup);

function setup(e) {
    const nButton = document.querySelector('#tButAskforNames');
    nButton.addEventListener('click', retrieveNameAndShowInsideTable);
}

function retrieveNameAndShowInsideTable(e) {
    const nNumber = document.querySelector('#tNumHowManyNames');
    const howManyNames = nNumber.value;

    const nRadio = document.querySelector('input[type="radio"][name="gender"]:checked');
    const gender = nRadio.value;

    const url = `https://namey.muffinlabs.com/name.json?count=${howManyNames}&type=${gender}`;
    fetch(url)
        .then(response => response.json())
        .then(data => fillTable(data))
        .catch(error => console.error(error))
}

function fillTable(names) {
    const nBody = document.querySelector('#tTabNames>tbody');

    // tBody.innerHTML = '';
    while (nBody.hasChildNodes()) {
        nBody.removeChild(nBody.firstChild);
    }

    for (const name of names) {
        const nTr = document.createElement('tr');
        nBody.appendChild(nTr);

        const nTd = document.createElement('td');
        nTr.appendChild(nTd);

        const nText = document.createTextNode(name)
        nTd.appendChild(nText);
    }
}