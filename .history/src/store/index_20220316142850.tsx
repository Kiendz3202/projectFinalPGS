import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './loginSlice'
import productsSlice from "./productItemsSlice";

const store = configureStore({
    reducer: { login: loginSlice.reducer,products:productsSlice.reducer }
})

export default store