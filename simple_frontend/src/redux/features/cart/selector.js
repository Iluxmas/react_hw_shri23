export const selectCartModule = (state) => state.cart;

export const selectProductCount = (state, id) => selectCartModule(state)[id] || 0; 