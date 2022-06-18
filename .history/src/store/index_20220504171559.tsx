  
import loginSlice from './loginSlice'
import productsSlice from "./productsSlice";

import { combineReducers } from "@reduxjs/toolkit";

// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'


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
    blacklist:['login']
}

const persistedReducer = persistReducer(persistConfig,reducers)

const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store