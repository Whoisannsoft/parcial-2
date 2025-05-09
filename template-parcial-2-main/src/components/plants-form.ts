import { store } from '../flux/Store';
import { Actions } from '../flux/Actions';

class ProductForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.shadowRoot!.innerHTML = `
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h2 class="text-2xl font-semibold text-center mb-4">incluir plantita </h2>
        <input type="text" id="Nombre planta" class="p-3 border border-gray-300 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Nombre de la planta">
        <input type="number" id="Nombre cientifico" class="p-3 border border-gray-300 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Nombre cientifico">
        <button id="addplant" class="bg-blue-500 text-white p-3 w-full rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Agregar planta</button>
      </div>
    `;
  }

  addEventListeners() {
    const addButton = this.shadowRoot!.querySelector('#addProductBtn')!;
    addButton.addEventListener('click', () => this.addProduct());
  }

  addProduct() {
    const title = (this.shadowRoot!.querySelector('#productName') as HTMLInputElement).value;
    const price = parseFloat((this.shadowRoot!.querySelector('#productPrice') as HTMLInputElement).value);

    if (title && price) {
      const product = { title, price };
      store.Dispatcher((product)); 
    }
  }
}

customElements.define('plants-form', ProductForm);