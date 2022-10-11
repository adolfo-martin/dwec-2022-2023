'use strict';

function showLinks(schools) {
    const nDiv = document.getElementById('tDivSchools');

    for (const school of schools) {
        const nA = document.createElement('a');
        nDiv.appendChild(nA);
        nA.setAttribute('href', school.url);
        nA.setAttribute('target', '_blank');
        nA.setAttribute('title', school.description);

        const nText = document.createTextNode(school.name);
        nA.appendChild(nText);
    }
}

showLinks(highSchools);