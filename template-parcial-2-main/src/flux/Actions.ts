import { getPlants } from "../services/Plants";

export const setProducts = (products: any[]) => ({
    type: 'SET_plants',
    payload: getPlants
  });
  
  export const addProduct = (product: any) => ({
    type: 'ADD_PRODUCT',
    payload: product
  });
  