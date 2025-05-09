
import { store } from '../flux/Store';
import { getPlants } from '../services/Plants';

class ProductList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    store.(() => this.render());
    this.render();
  }

  render() {
    const getPlants = store.getState().getPlants;
    this.shadowRoot!.innerHTML = `
      <div style="display:flex; gap:20px; border-radius:10px; padding:20px; flex-wrap:wrap; border:1px solid #ccc; background-color:#f9f9f9; box-shadow:0 4px 8px rgba(0,0,0,0.1); margin-top:30px">
        ${getPlants.map(getPlants => `
          <div style="border:1px solid #ccc; border-radius:10px; padding:20px; width:200px; text-align:center; background-color:#fff; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
            <h3 class="text-xl font-semibold text-gray-800">${plants.title}</h3>
            <p class="text-lg text-gray-600 mt-2">$${plants.toFixed(2)}</p>
          </div>
        `).join('')}
      </div>
    `;
  }
}

customElements.define('product-list', ProductList);
