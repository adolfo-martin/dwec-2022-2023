import PlaymobilService from '../services/PlaymobilService.js';

document.addEventListener('DOMContentLoaded', setup);

async function setup(e) {
    const series = await retrievePlaymobilSeries();
    fillTablePlaymobilSeries(series);
}


function getTokenFromSessionStorage() {
    const token = window.sessionStorage.getItem('token-playmobil');

    if (!token) {
        alert('No te has identificado como usuario.');
        window.location = '/view/login.html';
    }

    return token;
}


async function retrievePlaymobilSeries() {
    try {
        const token = getTokenFromSessionStorage();

        const service = new PlaymobilService();
        const series = await service.retrieveSeries(token);
        return series;
    } catch (error) {
        alert(error.message);
    }
}


function fillTablePlaymobilSeries(series) {
    const nTbody = document.querySelector('#tTabSeries>tbody');
    series.forEach(createRow);

    function createRow(serie) {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);

        const nTd = document.createElement('td');
        nTr.appendChild(nTd);
        nTd.textContent = serie.denomination;
        nTd.setAttribute('data-uuid', serie.uuid);
        nTd.addEventListener('click', gotoPageChooseBox);
    }
}


function gotoPageChooseBox(e) {
    const serie = e.target.dataset.uuid;
    const url = `/view/choose_box.html?serie=${serie}`;
    window.location = url;
}