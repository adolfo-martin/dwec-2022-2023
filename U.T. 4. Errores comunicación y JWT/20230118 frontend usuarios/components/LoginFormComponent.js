export default class LoginFormComponent extends HTMLElement {
    _template = `
        <form>
            <label>Usuario: </label>
            <input type="text" class="username">

            <label>Contraseña: </label>
            <input type="text" class="password">

            <input type="button" value="Validar">
        </form>
    `;

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this._shadowRoot.innerHTML = this._template;
    }
}

window.customElements.define('login-form', LoginFormComponent);