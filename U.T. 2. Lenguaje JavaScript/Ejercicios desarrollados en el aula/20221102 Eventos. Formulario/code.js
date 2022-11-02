'use strict';

// document.addEventListener('DOMContentLoaded', setup); //moderna
window.onload = setup;  //antigua

function setup(e) {
    const nForm = document.getElementById('tFrmData');
    // nForm.addEventListener('submit', isValidForm); //moderna
    nForm.onsubmit = isValidForm; //antigua
}


function isValidForm(e) {
    if (!isValidBirthYear()) {
        alert('Introduce un año');
        const nBirthYear = document.getElementById('tNumBirthYear');
        nBirthYear.focus();
        return false;
    }

    if (!isThereAtLeastOneCheckboxChecked()) {
        alert('Tienes que elegir al menos una situación laboral');
        return false;
    }

    return true;
}

function isValidBirthYear() {
    const nBirthYear = document.getElementById('tNumBirthYear');

    // if (nBirthYear.value.length === 0) {
    // if (!nBirthYear.value)
    if (nBirthYear.value === '') {
        return false;
    }

    const year = parseInt(nBirthYear.value);
    return true;
}

// hayAlMenosUnCheckboxMarcado
function isThereAtLeastOneCheckboxChecked() {
    const nCheckedNiNi = document.getElementById('tChkNini');
    const nCheckedStudent = document.getElementById('tChkStudent');
    const nCheckedWorker = document.getElementById('tChkWorker');
    const nCheckedRetired = document.getElementById('tChkRetired');

    if (nCheckedNiNi.checked) {
        return true;
    }

    if (nCheckedStudent.checked) {
        return true;
    }

    if (nCheckedWorker.checked) {
        return true;
    }

    if (nCheckedRetired.checked) {
        return true;
    }

    return false;
}