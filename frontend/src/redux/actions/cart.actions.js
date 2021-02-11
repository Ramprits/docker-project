import { cartTypes } from "../constants/cart.constants";

export const cartStart = () => ({
  type: cartTypes.CART_START,
});
export const cartSuccess = (payload) => ({
  type: cartTypes.CART_SUCCESS,
  payload,
});
export const cartFailure = (payload) => ({
  type: cartTypes.CART_FAILURE,
  payload,
});

export const addToCartItem = (payload) => ({
  type: cartTypes.CART_SUCCESS,
  payload,
});

export const removeCartItem = (item) => ({
  type: cartTypes.REMOVE_CART,
  payload: item,
});
export const clearCartItem = (cartId) => ({
  type: cartTypes.CLEAR_CART_ITEM,
  payload: cartId,
});
