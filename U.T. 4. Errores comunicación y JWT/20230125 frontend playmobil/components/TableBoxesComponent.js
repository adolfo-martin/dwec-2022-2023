import PlaymobilService from '../services/PlaymobilService.js';

export default class TableBoxesComponent extends HTMLElement {
    #service;
    #shadowRoot;
    #template = `
        <style>
            table, tr, th, td {
                border: solid 2px black;
                border-collapse: collapse;
            }
        </style>
        <table>
            <thead>
                <tr>
                    <th>Box</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    `;

    constructor() {
        super();
        console.log('constructor');

        this.#shadowRoot = this.attachShadow({ mode: 'open' });
        this.#shadowRoot.innerHTML = this.#template;

        this.#service = new PlaymobilService();
    }

    async connectedCallback() {
        console.log('connectedCallback');
        await this.#retrieveBoxesAndFillTable();
    }


    #extractSerieUuidFromUrl() {
        const params = new URLSearchParams(window.location.search);
        const serieUuid = params.get('serie');
        return serieUuid;
    }


    async #retrieveBoxesAndFillTable() {
        try {
            const token = window.sessionStorage.getItem('token-playmobil');
            const serieUuid = this.#extractSerieUuidFromUrl();

            const boxes = await this.#service.retrieveBoxesBySerieUuid(token, serieUuid);

            const nTbody = this.#shadowRoot.querySelector('tbody');

            for (const boxUuid of boxes) {
                const box = await this.#service.retrieveBoxByUuid(token, boxUuid);

                const nTr = document.createElement('tr');
                nTbody.appendChild(nTr);

                const nTdDenomination = document.createElement('td');
                nTr.appendChild(nTdDenomination);
                nTdDenomination.textContent = box._denomination;
                nTdDenomination.setAttribute('data-uuid', box._uuid);

                const nTdPrice = document.createElement('td');
                nTr.appendChild(nTdPrice);
                nTdPrice.textContent = box._price;
                nTdPrice.setAttribute('data-uuid', box._uuid);

                // nTd.addEventListener('click', this.#gotoPageChooseBox.bind(this));
            }

        } catch (error) {
            alert(error.message);
        }
    }

    #gotoPageChooseBox(e) {
        const boxUuid = e.target.dataset.uuid;
        window.location = `./choose_box.html?box=${boxUuid}`;
    }
}


window.customElements.define('table-boxes', TableBoxesComponent);