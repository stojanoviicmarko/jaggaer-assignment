import { createSlice } from '@reduxjs/toolkit';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { getProduct } from '../../../api/productApi';

const initialState = {
  product: {},
  cart: [],
  quantity: 1,
  isVisible: true,
};

export const productApiSlice = createApi({
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    fetchProduct: builder.query({
      queryFn: async () => {
        return {
          data: await getProduct(),
        };
      },
      providesTags: ['Product'],
    }),
  }),
});

export const { useFetchProductQuery } = productApiSlice;

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    addToCart: (state, action) => {
      for (let i = 1; i <= state.quantity; i++) state.cart.push(action.payload);
    },
    isVisible: (state, action) => {
      state.isVisible = action.payload;
    },
  },
});

export const initialiseProductApi = () =>
  productApiSlice.endpoints.fetchUsers.initiate();

export const { fetchProduct, addToCart, addQuantity, isVisible } =
  productSlice.actions;

export const selectProduct = (state) => state.product.product;
export const selectCart = (state) => state.product.cart;
export const selectQuantity = (state) => state.product.quantity;
export const selectIsVisible = (state) => state.product.isVisible;

export default productSlice.reducer;
