document.addEventListener('DOMContentLoaded', setup);

function setup(e) {
    const nHeight = document.getElementById('tTxtHeight');
    nHeight.addEventListener('keyup', showHeight);

    const nSelect = document.getElementById('tSelModule');
    nSelect.addEventListener('change', showModule);

    // tChkDI.addEventListener('change', showModule);
    // tChkEC.addEventListener('change', showModule);
    // tChkES.addEventListener('change', showModule);
    // tChkLM.addEventListener('change', showModule);
    // tChkDS.addEventListener('change', showModule);

    // const checkboxes = document.getElementsByName('module');
    const radios = document.querySelectorAll('input[type="radio"]');
    for (const radio of radios) {
        radio.addEventListener('change', showModule);
    }

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (const checkbox of checkboxes) {
        checkbox.addEventListener('change', showFood);
    }
}

function showHeight(e) {
    const tag = e.target;
    const text = tag.value;
    console.log(text);

    const tag2 = document.getElementById('tNumHeight');
    tag2.value = text;

    tRanHeight.value = text;
}

function showModule(e) {
    const tag = e.target;
    const id = tag.value;
    console.log(id);

    const tag2 = document.getElementById('tTxtHeight');
    tag2.value = id;
}

function showFood(e) {
    // const nCheckbox = e.target;
    // if (nCheckbox.checked) {
    //     console.log('Al maestro le gusta el ' + nCheckbox.dataset.descripcion)
    // } else {
    //     console.log('Al maestro no le gusta el ' + nCheckbox.dataset.descripcion)
    // }

    let message = 'Al jefe le gusta: ';
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            message += '\n * ' + checkbox.dataset.descripcion;
        }
    }

    tTxaComidas.value = message;
}