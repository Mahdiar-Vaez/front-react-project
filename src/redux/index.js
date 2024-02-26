import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./slices/AuthSlice";
import CartSlice from "./slices/CartSlice";
 const store =configureStore({
    reducer:{
        auth:AuthSliceReducer,
        cart:CartSlice
    }
 })
 export default store