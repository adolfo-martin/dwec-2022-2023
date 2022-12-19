document.addEventListener('DOMContentLoaded', setup);

function setup(e) {
    document.querySelector('#tButCreateCar').addEventListener('click', createCar);
}

function createCar() {
    const nTxtBrand = document.querySelector('#tTxtBrand');
    const brand = nTxtBrand.value;

    const model = document.querySelector('#tTxtModel').value;

    fetch('http://127.0.0.1:3000/api/cars', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({ brand, model })
    })
}