document.addEventListener('DOMContentLoaded', setup);

import { retrieveCountries, retrieveCountryByCode } from './countries.lib.js'


async function setup() {
    // console.log(await retrieveCountryByCode('ESP'));

    configureEventChangeOnSelectCountries();

    const countries = await retrieveCountries();
    // console.log(countries);
    fillSelectCountries(countries);
}


function configureEventChangeOnSelectCountries() {
    const nSelect = document.querySelector('#tSelCountries');
    nSelect.addEventListener('change', showCountryDetails);
}


function fillSelectCountries(countries) {
    const nSelect = document.querySelector('#tSelCountries');

    const createOption = ({ name, code }) => {
        const nOption = document.createElement('option');
        nSelect.appendChild(nOption);
        nOption.setAttribute('value', code);

        const nText = document.createTextNode(name);
        nOption.appendChild(nText);
    };

    countries
        .sort((country1, country2) => country1.name.localeCompare(country2.name))
        .forEach(createOption);

}


async function showCountryDetails(e) {
    // const countryCode = e.target.value;
    const countryCode = document.querySelector('#tSelCountries').value;
    const country = await retrieveCountryByCode(countryCode);
    document.querySelector('#tSpnNameCommon').textContent = country.nameCommon;
    document.querySelector('#tSpnNameOfficial').textContent = country.nameOfficial;
    document.querySelector('#tSpnCode').textContent = country.code;
    document.querySelector('#tSpnCapital').textContent = country.capital;
    document.querySelector('#tSpnPopulation').textContent = country.population;
    document.querySelector('#tSpnArea').textContent = country.area;
    document.querySelector('#tImgFlag').src = country.flag;

    document.querySelector('#tDlgCountry').showModal();
}