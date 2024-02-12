import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./slices/AuthSlice";
 const store =configureStore({
    reducer:{
        auth:AuthSliceReducer
    }
 })
 export default store