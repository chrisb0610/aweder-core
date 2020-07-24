export default {
  ADD_TO_CART(state, payload) {
    const stateProduct = state.products.find((product) => product.product.id === payload.product.id);

    if (stateProduct) {
      stateProduct.quantity += payload.quantity;
    } else {
      state.products.push({
        product: payload.product,
        quantity: payload.quantity,
      });
    }
  },
  REMOVE_FROM_CART(state, payload) {
    const stateProduct = state.products.find((product) => product.id === payload.id);

    if (stateProduct) {
      stateProduct.quantity -= 1;
    }

    if (stateProduct && stateProduct.quantity < 1) {
      state.products = state.products.filter((product) => product.id !== payload.id);
    }
  },
};
