import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";
export const addToCart = (cartObj) => ({
  type: ADD_TO_CART,
  payload: cartObj,
});

export const removeFromCart = (cartObj) => ({
  type: REMOVE_FROM_CART,
  payload: cartObj,
});
