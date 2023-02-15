import {combineReducers, configureStore} from "@reduxjs/toolkit";
import posts from "./PostsStore";
import post from "./PostStore"
import comments from "./CommentsStore";

const rootReducer = combineReducers({
    posts,
    post,
    comments,
})

export const store = configureStore(({
    reducer: rootReducer
}))