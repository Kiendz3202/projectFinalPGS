import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name:'products',
    initialState:{products:[]},
    reducers:{
        products(state,action){
            
            sessionStorage.setItem('products',JSON.stringify(action.payload.data))
        }
    }
})

export const productsActions = productsSlice.actions
export default productsSlice