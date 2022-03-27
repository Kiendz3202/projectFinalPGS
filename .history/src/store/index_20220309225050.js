import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: { login: loginSlice.reducer }
})

export default store