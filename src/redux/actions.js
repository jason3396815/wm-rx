const ADD_TO_CART = "ADD_TO_CART";
const REMOVE = "REMOVE";

export const addToCart = (id) => ({ type: ADD_TO_CART, id });
export const remove = (id) => ({ type: REMOVE, id });