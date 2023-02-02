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
    }
}


window.customElements.define('header-login', HeaderLoginComponent);