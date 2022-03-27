import { createSlice } from "@reduxjs/toolkit";
import SearchProductForm from "../components/form/searchform/SearchProductForm";

const productsSlice = createSlice({
    name:'products',
    initialState:{products:[],categories:[],productsSearch:[],isSearching:false,fetched:true},
    reducers:{
        products(state,action){
            
            state.products = action.payload.data
        },
        categories(state,action){
            state.categories = action.payload.data
        },
        SearchProductForm(state,action){
            state.isSearching = action.payload.isSearching
            state.productsSearch = action.payload.data
        },
        fetched(state){
            state.fetched = false
        }
    }
})

export const productsActions = productsSlice.actions
export default productsSlice