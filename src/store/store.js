import { configureStore, createAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import productReducer, {
  productApiSlice,
} from '../components/Product/slice/productSlice';

export const resetStore = createAction('resetStore');

const rootReducer = combineReducers({
  product: productReducer,
  [productApiSlice.reducerPath]: productApiSlice.reducer,
});

const appReducer = (state, action) => {
  if (action.type === resetStore.type) {
    return rootReducer(undefined, action);
  }

  return rootReducer(state, action);
};

export const store = configureStore({
  reducer: appReducer,
});
