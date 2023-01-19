import AuthenticationService from '../services/AuthenticationService.js';

document.addEventListener('DOMContentLoaded', setup);

function setup(e) {
    const nButton = document.querySelector('#tButValidar');
    nButton.addEventListener('click', validateUser);
}

async function validateUser(e) {
    const username = document.querySelector('#tTxtUsername').value;
    const password = document.querySelector('#tTxtPassword').value;

    try {
        const service = new AuthenticationService();
        const token = await service.validateUsernameAndPasswordAndGetToken(username, password);
        window.sessionStorage.setItem('token', token);
        window.location = './show_students.htm';
    } catch (error) {
        alert(error);
    }
}