import { shopTypes } from "../constants/shop.constants";
export const shopCollectionStart = () => ({
  type: shopTypes.SHOP_START,
});
export const shopCollectionSuccess = () => ({
  type: shopTypes.SHOP_SUCCESS,
});
export const shopCollectionFailure = () => ({
  type: shopTypes.SHOP_FAILURE,
});
