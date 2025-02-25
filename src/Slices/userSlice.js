import { USERS_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";


export const usersApiSlice=apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    login:builder.mutation({
      query:(data)=>({
        url:USERS_URL/login,
        method:"POST",
        body:data,
      }),
      providesTags: ['User'],
    }),
    // getProductDetails: builder.query({
    //   query: (productId) => ({
    //     url: `${PRODUCTS_URL}/${productId}`,
    //   }),
    //   keepUnusedDataFor: 1, // Cache data for 5 seconds
    // })
  }),
});

export const {useLoginMutation} = usersApiSlice;