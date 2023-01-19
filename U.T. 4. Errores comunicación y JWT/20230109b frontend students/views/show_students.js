import StudentsService from '../services/StudentsService.js';

document.addEventListener('DOMContentLoaded', setup);

async function setup(e) {
    const view = new ShowStudentsView();
    view.checkAndRetrieveToken();
    view.setupCloseSessionButton();
    await view.retrieveAndShowStudents();
}

class ShowStudentsView {
    setupCloseSessionButton() {
        const nButton = document.querySelector('#tButCloseSession');
        nButton.addEventListener('click', e => {
            window.sessionStorage.removeItem('token');
            window.location = './login.htm';
        })
    }

    checkAndRetrieveToken() {
        const token = window.sessionStorage.getItem('token');

        if (!token) {
            alert('El usuario no se ha identicado');
            window.location = './login.htm';
            return;
        }

        const decodedToken = this._decodeToken(token);
        const nSpan = document.querySelector('#tSpnFullname').textContent =
            `${decodedToken.firstname} ${decodedToken.lastname}`;
    }


    _decodeToken(token) {
        const tokenDecodificado = parseJwt(token);
        return tokenDecodificado;

        function parseJwt(token) {
            try {
                return JSON.parse(atob(token.split('.')[1]))
            } catch (error) {
                throw new Error(`Problem decoding token "${token}": ${error}`);
            }
        }
    }


    async retrieveAndShowStudents() {
        try {
            this.showInfo('Espere, por favor. Estamos recuperando la información necesaria.');

            const service = new StudentsService();
            const students = await service.retrieveStudents();

            const nTbody = document.querySelector('#tTabStudents>tbody');

            students.forEach(createRow);

            const nDialog = document.querySelector('#tDlgMessage');
            nDialog.close();

            function createRow(student) {
                const nTr = document.createElement('tr');
                nTbody.appendChild(nTr);

                const nTd = document.createElement('td');
                nTr.appendChild(nTd);
                nTd.textContent = `${student.firstname} ${student.lastname}`;
            }

        } catch (error) {
            const nDialog = document.querySelector('#tDlgMessage');
            nDialog.close();
            this.showError(`Problema al recuperar los estudiantes: ${error}`);
        }
    }


    showInfo(info) {
        const nDialog = document.querySelector('#tDlgMessage');
        nDialog.showModal();
        const nHeader = document.querySelector('#tDlgMessage>header');
        nHeader.textContent = 'Información';
        const nParagraph = document.querySelector('#tDlgMessage>p');
        nParagraph.textContent = info;
        const nButton = document.querySelector('#tDlgMessage>button');
        nButton.addEventListener('click', e => nDialog.close());
    }

    showError(error) {
        const nDialog = document.querySelector('#tDlgMessage');
        nDialog.showModal();
        const nHeader = document.querySelector('#tDlgMessage>header');
        nHeader.textContent = 'Error';
        const nParagraph = document.querySelector('#tDlgMessage>p');
        nParagraph.textContent = error;
        const nButton = document.querySelector('#tDlgMessage>button');
        nButton.addEventListener('click', e => nDialog.close());
    }
}