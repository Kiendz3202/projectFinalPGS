import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './loginSlice'
import productsSlice from "./productItemsSlice";

const store = configureStore({
    reducer: { login: loginSlice.reducer,products:productsSlice.reducer }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store