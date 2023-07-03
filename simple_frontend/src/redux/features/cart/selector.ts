import { CartState } from '@/types/store';

interface State {
  cart: CartState
}

export const selectCartModule = (state: State) => state.cart;

export const selectProductCount = (state: State, id: string) => selectCartModule(state)[id] || 0; 