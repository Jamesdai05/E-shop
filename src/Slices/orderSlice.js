import { ORDERS_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";


export const ordersApiSlice=apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    getOrders:builder.query({
      query:()=>({
        url:PRODUCTS_URL,
      }),
      keepUnusedDataFor:1,
      providesTags: ['Product'],
    }),
    createOrders: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method:"POST",
        body:{...order}
      }),
      keepUnusedDataFor: 1, // Cache data for 5 seconds
    })
  }),
});

export const {useCreateOrdersMutation}=ordersApiSlice;