import LoginService from '../services/LoginService.js';


export default class LoginFormComponent extends HTMLElement {
    // #service;
    #shadowRoot;
    #template = `
        <style>
            :host {
                display: inline-grid;
                grid-template-columns: auto auto;
                gap: 0.5rem;
                background-color: var(--lightcolor);
                padding: 0.5rem;
            }

            header,
            button {
                grid-column: 1 / span 2;
            }

            header {
                text-align: center;
                background-color: var(--darkcolor);
                color: white;
            }

            label {
                text-align: right;
            }

            button {
                width: fit-content;
                margin: auto;
                font-size: inherit;
                padding: 0.25em 0.5em;
                border: none;
                border-radius: 15px;
            }
        </style>

        <header></header>

        <label>Usuario:</label>
        <input type="text" class="username">

        <label>Contraseña:</label>
        <input type="text" class="password">

        <button></button>
    `;
    // #title;
    // #button;
    // #username;

    // get title() {
    //     return this.#title;
    // }

    // get button() {
    //     return this.#button;
    // }

    // get username() {
    //     return this.#username;
    // }

    // set title(value) {
    //     this.#title = value;
    //     this.#shadowRoot.querySelector('header').textContent = value;
    // }

    // set button(value) {
    //     this.#button = value;
    //     this.#shadowRoot.querySelector('button').textContent = value;
    // }

    // set username(value) {
    //     this.#username = value;
    //     this.#shadowRoot.querySelector('.username').value = value;
    // }

    constructor() {
        super();
        console.log('constructor');

        this.#shadowRoot = this.attachShadow({ mode: 'open' });
        this.#shadowRoot.innerHTML = this.#template;

        this.#setupValidateButton();

        // this.#service = new PlaymobilService();
    }


    #setupValidateButton() {
        this.#shadowRoot.querySelector('button').addEventListener('click', async e => {
            const username = this.#shadowRoot.querySelector('.username').value;
            const password = this.#shadowRoot.querySelector('.password').value;

            if (!username || !password) {
                alert('Completa el usuario y la contraseña');
                return;
            }

            const service = new LoginService();
            const token = await service.validateUsernameAndPasswordAndRetrieveToken(username, password);
            window.sessionStorage.setItem('token-playmobil', token);
        });
    }


    // async connectedCallback() {
    //     console.log('connectedCallback');
    //     // await this.#retrieveBoxesAndFillTable();
    // }


    static get observedAttributes() {
        return ['username', 'title', 'button'];
    }


    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'title') {
            // this.title = newValue;
            this.#shadowRoot.querySelector('header').textContent = newValue;
        } else if (name === 'button') {
            // this.button = newValue;
            this.#shadowRoot.querySelector('button').textContent = newValue;
        } else if (name === 'username') {
            // this.username = newValue;
            this.#shadowRoot.querySelector('.username').value = newValue;
        }
    }


    // #extractSerieUuidFromUrl() {
    //     const params = new URLSearchParams(window.location.search);
    //     const serieUuid = params.get('serie');
    //     return serieUuid;
    // }


    // async #retrieveBoxesAndFillTable() {
    //     try {
    //         const token = window.sessionStorage.getItem('token-playmobil');

    //         // const serieUuid = this.#extractSerieUuidFromUrl();
    //         const serieUuid = this.#serie;

    //         const boxes = await this.#service.retrieveBoxesBySerieUuid(token, serieUuid);

    //         const nTbody = this.#shadowRoot.querySelector('tbody');

    //         for (const boxUuid of boxes) {
    //             const box = await this.#service.retrieveBoxByUuid(token, boxUuid);

    //             const nTr = document.createElement('tr');
    //             nTbody.appendChild(nTr);

    //             const nTdDenomination = document.createElement('td');
    //             nTr.appendChild(nTdDenomination);
    //             nTdDenomination.textContent = box._denomination;
    //             nTdDenomination.setAttribute('data-uuid', box._uuid);

    //             const nTdPrice = document.createElement('td');
    //             nTr.appendChild(nTdPrice);
    //             nTdPrice.textContent = box._price;
    //             nTdPrice.setAttribute('data-uuid', box._uuid);

    //             // nTd.addEventListener('click', this.#gotoPageChooseBox.bind(this));
    //         }

    //         this.#dispatchTableFillingCompleted();
    //     } catch (error) {
    //         alert(error.message);
    //     }
    // }


    // #dispatchTableFillingCompleted() {
    //     const event = new CustomEvent('fillingcompleted');
    //     this.dispatchEvent(event);
    // }


    // #gotoPageChooseBox(e) {
    //     const boxUuid = e.target.dataset.uuid;
    //     window.location = `./choose_box.html?box=${boxUuid}`;
    // }
}


window.customElements.define('login-form', LoginFormComponent);