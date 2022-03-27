import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name:'products',
    initialState:{products:[]},
    reducers:{
        products(state,action){

            state.products = sessionStorage.getItem('products')
        }
    }
})

export const productsActions = productsSlice.actions
export default productsSlice