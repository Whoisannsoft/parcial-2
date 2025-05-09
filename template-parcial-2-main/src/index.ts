import Root from "./Root/Root";

customElements.define('root-element', Root);

import './components/product-form';
import './components/product-list';
import { requestToAPI } from './Api/request';
import { store } from './flux/Store';
import {  } from './flux/Actions';
import { getPlants } from "./services/Plants";


requestToAPI().then(data => {
  store.dispatch(getPlants(data)); 
});
