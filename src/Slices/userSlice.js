import { USERS_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";


export const productsApiSlice=apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    getUsers:builder.query({
      query:()=>({
        url:USERS_URL,
      }),
      keepUnusedDataFor:1,
      providesTags: ['User'],
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 1, // Cache data for 5 seconds
    })
  }),
});