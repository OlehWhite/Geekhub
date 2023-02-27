import {combineReducers, configureStore} from "@reduxjs/toolkit";
import posts from "./postsStore";
import post from "./postStore"
import comments from "./commentsStore";

const rootReducer = combineReducers({
    posts,
    post,
    comments,
})

export const store = configureStore(({
    reducer: rootReducer
}))