import {combineReducers, configureStore} from "@reduxjs/toolkit";
import posts from "./posts";

const rootReducer = combineReducers({
    posts,
})

export const store = configureStore(({
    reducer: rootReducer
}))