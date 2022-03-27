import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const productsSlice = createSlice({
    name:'products',
    initialState:{products:[]},
    reducers:{
        products(state,action){
            
            state.products = action.payload.data
        }
    }
})

export const productsActions = productsSlice.actions
export default productsSlice