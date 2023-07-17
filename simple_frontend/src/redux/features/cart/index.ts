import { CartState } from '@/types/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: CartState = {};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, { payload }: PayloadAction<string>) => {
      const count = state[payload] || 0;
      if (count === 30) {
        return;
      } else {
        state[payload] = count + 1;
      }
    },
    decrement: (state, { payload }: PayloadAction<string>) => {
      const count = state[payload];

      if (count === 1) {
        delete state[payload];
        return;
      }
      if (!count) return;

      state[payload] = count - 1;
    },
    reset: (state, { payload }: PayloadAction<string>) => {
      delete state[payload];
      return;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
