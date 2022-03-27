import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './loginSlice'
import productsSlice from "./productsSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";


// const store = configureStore({
//     reducer: { login: loginSlice.reducer,products:productsSlice.reducer }
// })

const reducers = combineReducers({
    products:productsSlice.reducer
})

const persistConfig = {
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,reducers)

const store = configureStore({
    reducer:persistedReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store