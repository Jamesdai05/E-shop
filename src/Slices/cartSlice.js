import { createSlice } from "@reduxjs/toolkit";

// set the initialState to  the browser memory or to be an empty array
const initialState=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')) : {cartItems:[]}

const addDecimals=(num)=>{
  return (Math.round(num*100)/100).toFixed(2)
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
      addToCart:(state,action)=>{
        const item=action.payload;

        //to check the item whether exist in the current cart
        const existItem=state.cartItems.find(e=>e._id===item._id)
        // to check if the item exist and update the quantity.
        if(existItem){
          state.cartItems=state.cartItems.map(e=>e._id===existItem._id ? item : e)
        }else{
          state.cartItems=[...state.cartItems,item]
        }
        // calculate the items price
        state.itemsPrice=addDecimals(state.cartItems.reduce((acc,item)=>acc + item.price * item.qty,0))
        // calculate the shipping price

        state.shippingPrice=addDecimals(state.itemsPrice >200 ? 0 : 10)
        // calculate the tax price
        state.taxPrice=addDecimals(Number((0.15*state.itemsPrice).toFixed(2)))
        // calculate the total price
        state.totalPrice =(
          Number(state.itemsPrice)+
          Number(state.shippingPrice) +
          Number(state.taxPrice)
        ).toFixed(2);
        localStorage.setItem("cart",JSON.stringify(state))
      }
    }
})

// export the actions
export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer