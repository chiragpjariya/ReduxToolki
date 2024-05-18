import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "../storage/FormSlice"
export const store = configureStore({
    reducer:FormReducer
        
    
})