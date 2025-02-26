import { USERS_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";


export const usersApiSlice=apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    login:builder.mutation({
      query:(data)=>({
        url:`${USERS_URL}/login`,
        method:"POST",
        body:data,
      }),
      providesTags: ['User'],
    }),
    registration:builder.mutation({
      query:(data)=>({
        url:`${USERS_URL}/registration`,
        method:"POST",
        body:data,
      }),
      // providesTags: ['User'],
    }),
    logout:builder.mutation({
      query:()=>({
        url:`${USERS_URL}/logout`,
        method:"POST",
      }),
      providesTags: ['User'],
    }),
  }),
});

export const {useLoginMutation,useLogoutMutation,useRegistrationMutation} = usersApiSlice;