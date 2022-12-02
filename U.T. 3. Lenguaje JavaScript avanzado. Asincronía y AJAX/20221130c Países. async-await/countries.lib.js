document.addEventListener('DOMContentLoaded', setup);

async function setup(e) {
    const countries = await retrieveCountries();
    fillCountriesContainer(countries);
}

async function retrieveCountries() {
    const url = 'https://restcountries.com/v3.1/all';
    const response = await fetch(url);
    const data = await response.json();
    const countries = data.map(
        country => ({ name: country.name.official, code: country.cca3 })
    );
    return countries;
}

function fillCountriesContainer(countries) {
    const nDiv = document.querySelector('#tDivCountries');

    countries.forEach(country => {
        const nRadio = document.createElement('input');
        nDiv.appendChild(nRadio);
        nRadio.setAttribute('type', 'radio');
        nRadio.setAttribute('name', 'country');
        nRadio.setAttribute('value', country.code);
        nRadio.setAttribute('id', `tRad${country.code}`);

        const nLabel = document.createElement('label');
        nDiv.appendChild(nLabel);
        nLabel.setAttribute('for', `tRad${country.code}`);

        const nText = document.createTextNode(country.name);
        nLabel.appendChild(nText);
    });
}