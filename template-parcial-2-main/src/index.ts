import Root from "./Root/Root";

customElements.define('root-element', Root);

import './components/product-form';
import './components/product-list';
import { requestToAPI } from './api/request';
import { store } from './store/store';
import { setProducts } from './store/actions';


requestToAPI().then(data => {
  store.dispatch(setProducts(data)); 
});
