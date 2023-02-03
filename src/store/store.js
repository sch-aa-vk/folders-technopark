import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cart.slice';
import folders from './slices/store.slice';

export const store = configureStore({
  reducer: {
    folders,
    cart
  }
})

store.subscribe(() => {
  sessionStorage['redux-store-folders'] = JSON.stringify(store.getState());
})

export default store;