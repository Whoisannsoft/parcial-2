class AppHeader extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot!.innerHTML = `
        <header class="bg-blue-500 text-white p-6 shadow-md">
          <h1 class="text-3xl font-bold text-center">parcial - Plantas</h1>
          <button id="getVotesBtn" class="bg-blue-700 p-3 rounded-md w-full mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Ver más</button>
        </header>
      `;
    }
  }
  
  customElements.define('app-header', AppHeader);
  