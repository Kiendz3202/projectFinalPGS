import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './loginSlice'
import productsSlice from "./productsSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


// const store = configureStore({
//     reducer: { login: loginSlice.reducer,products:productsSlice.reducer }
// })

const reducers = combineReducers({
    login:loginSlice.reducer,
    products:productsSlice.reducer
})

const persistConfig = {
    key:'root',
    storage,
    stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig,reducers)

const store = configureStore({
    reducer:persistedReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store