import { combineReducers } from "redux";
import { CategoriesReducer } from "./CategoriesReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const reducers=combineReducers({category:CategoriesReducer});

export const store=configureStore({
    reducer:reducers,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({serializableCheck:false}),
    
})