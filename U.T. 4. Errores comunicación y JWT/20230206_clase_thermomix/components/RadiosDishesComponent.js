import ThermomixService from '../services/ThermomixService.js';

export default class RadiosDishesComponent extends HTMLElement {
    #service;
    #shadowRoot;
    #template = `
        <style>
            :host {
                display: inline-grid;
                grid-template-columns: auto auto;
            }    
        </style>

    `;
    #book;
    #token;

    get book() {
        return this.#book;
    }

    set book(value) {
        this.#book = value;
        if (this.#book && this.#token) {
            this.#retrieveDishesAndFillContainer().then();
        }
    }

    get token() {
        return this.#token;
    }

    set token(value) {
        this.#token = value;
        if (this.#book && this.#token) {
            this.#retrieveDishesAndFillContainer().then();
        }
    }

    constructor() {
        super();

        this.#shadowRoot = this.attachShadow({ mode: 'open' });
        this.#shadowRoot.innerHTML = this.#template;

        this.#service = new ThermomixService();
    }

    async connectedCallback() {
        // await this.#retrieveDishesAndFillContainer();
    }


    static get observedAttributes() {
        return ['book', 'token'];
    }


    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'book') {
            console.log(newValue);
            this.book = newValue;
        } else if (name === 'token') {
            console.log(newValue);
            this.token = newValue;
        }
    }


    #extractSerieUuidFromUrl() {
        const params = new URLSearchParams(window.location.search);
        const serieUuid = params.get('serie');
        return serieUuid;
    }


    async #retrieveDishesAndFillContainer() {
        try {
            const dishes = await this.#service.retrieveDishesByBookId(this.#book, this.#token);

            const nContainer = this.#shadowRoot;

            for (const dishId of dishes) {
                const dish = await this.#service.retrieveDish(dishId, this.#token);

                const nInput = document.createElement('input');
                nContainer.appendChild(nInput);
                nInput.setAttribute('type', 'radio');
                nInput.setAttribute('name', 'dish');
                nInput.setAttribute('value', dish.id);
                // nInput.setAttribute('type', 'radio');
                // nInput.setAttribute('type', 'radio');
                // nInput.setAttribute('type', 'radio');
                nInput.addEventListener('change', this.#reportDishChanged.bind(this));

                const nLabel = document.createElement('label');
                nContainer.appendChild(nLabel);
                nLabel.textContent = dish.name;
                // nTdDenomination.setAttribute('data-uuid', box._uuid);


            }

            const event = new CustomEvent('fillingcompleted');
            this.dispatchEvent(event);

            // this.#dispatchTableFillingCompleted();
        } catch (error) {
            alert(error.message);
        }
    }


    #reportDishChanged(e) {
        const dishId = e.target.value;
        const event = new CustomEvent('dishchanged', { detail: { dish: dishId } });
        this.dispatchEvent(event);
    }


    #dispatchTableFillingCompleted() {
        const event = new CustomEvent('fillingcompleted');
        this.dispatchEvent(event);
    }


    #gotoPageChooseBox(e) {
        const boxUuid = e.target.dataset.uuid;
        window.location = `./choose_box.html?box=${boxUuid}`;
    }
}


window.customElements.define('radios-dishes', RadiosDishesComponent);