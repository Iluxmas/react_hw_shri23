import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { cartReducer } from '@/redux/features/cart';
import { biletApi } from '@/redux/services/biletApi';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [biletApi.reducerPath]: biletApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([biletApi.middleware]),
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);
