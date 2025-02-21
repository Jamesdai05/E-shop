import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./Slices/apiSlice.js";

const store=configureStore({
  reducer:{
    [apiSlice.reducerPath]:apiSlice.reducer,
  },
  middleWare:(getDefaultMiddleWare)=>getDefaultMiddleWare().concat(apiSlice.middleware),
  devTools:true,
})


export default store;