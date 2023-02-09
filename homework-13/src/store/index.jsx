import {combineReducers, configureStore} from "@reduxjs/toolkit";
import posts from "./posts-store";
import post from "./post-store"
import comments from "./comments-store";

const rootReducer = combineReducers({
    posts,
    post,
    comments,
})

export const store = configureStore(({
    reducer: rootReducer
}))