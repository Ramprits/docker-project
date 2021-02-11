import { cartTypes } from "../constants/cart.constants";
import {
  addToCartItems,
  removeToCartItems,
  clearFromCartItems,
} from "../utils/cartUtils";

const initialState = {
  cartItems: [],
  loading: false,
  errorMessage: "",
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case cartTypes.CART_START:
      return Object.assign({}, state, {
        loading: true,
        errorMessage: "",
      });
    case cartTypes.CART_SUCCESS:
      return {
        ...state,
        cartItems: addToCartItems(state.cartItems, payload),
      };

    case cartTypes.REMOVE_CART:
      return {
        ...state,
        cartItems: removeToCartItems(state.cartItems, payload),
      };
    case cartTypes.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: clearFromCartItems(state.cartItems, payload),
      };

    case cartTypes.CART_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: payload,
      });

    default:
      return state;
  }
};
