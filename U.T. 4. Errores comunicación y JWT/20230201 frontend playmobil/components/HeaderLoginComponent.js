export default class HeaderLoginComponent extends HTMLElement {
    #template = `
        <style>
            :host {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 1rem;
            }

            header {                
                flex-grow: 1;
                font-size: 2em;
            }

            button {
                background-color: var(--lightcolor);
                padding: 0.5em 1em;
                border: none;
                border-radius: 15px;
            }

            .hidden {
                display: none;
            }
        </style>

        <header>Playmobil</header>
        <span class="fullname">Adolfo Martín</span>
        <button>Cerrar sesión</button>
    `;
    #shadowRoot;

    constructor() {
        super();

        this.#shadowRoot = this.attachShadow({ mode: 'open' });
        this.#shadowRoot.innerHTML = this.#template;

        this.#hideSessionIfNotToken();
        this.#setupCloseSessionButton();
    }

    #hideSessionIfNotToken() {
        const token = window.sessionStorage.getItem('token-playmobil');
        if (!token) {
            if (window.location.pathname !== '/views/login.html') {
                window.location = './login.html';
            }

            this.#shadowRoot.querySelector('span').classList.add('hidden');
            this.#shadowRoot.querySelector('button').classList.add('hidden');
        }
    }

    #setupCloseSessionButton() {
        this.#shadowRoot.querySelector('button').addEventListener('click', e => {
            window.sessionStorage.removeItem('token-playmobil');
            window.location = './login.html';
        });
    }
}


window.customElements.define('header-login', HeaderLoginComponent);