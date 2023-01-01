import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slices/store.slice';

export const store = configureStore({
  reducer: {
    todos: todosReducer
  }
})

store.subscribe(() => {
  sessionStorage['redux-store-folders'] = JSON.stringify(store.getState());
})

export default store;