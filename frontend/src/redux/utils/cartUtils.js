export const addToCartItems = (cartItems, addToCartItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === addToCartItem.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === addToCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...addToCartItem, quantity: 1 }];
};

export const clearFromCartItems = (cartItems, removeCartItemId) => {
  return cartItems.filter((cartItem) => cartItem.id !== removeCartItemId);
};

export const removeToCartItems = (cartItems, removeCartItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === removeCartItem.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== removeCartItem.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === removeCartItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
