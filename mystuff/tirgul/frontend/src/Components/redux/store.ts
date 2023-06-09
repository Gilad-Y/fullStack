import { combineReducers } from "redux";
import { TasksReducer } from "./tasksReducer";
import { configureStore } from "@reduxjs/toolkit";

const reducers=combineReducers({
    task:TasksReducer,
});
export const store= configureStore({
    reducer:reducers,
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({serializableCheck:false}),
})