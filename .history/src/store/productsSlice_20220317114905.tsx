import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name:'products',
    initialState:{products:[],categories:[]},
    reducers:{
        products(state,action){
            
            state.products = action.payload.data
        },
        categories(state,action){
            state.categories = action.payload.data
        }
    }
})

export const productsActions = productsSlice.actions
export default productsSlice