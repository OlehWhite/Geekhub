import { createSlice } from "@reduxjs/toolkit";

const posts = createSlice({
    name: 'posts',
    initialState: {
        items: [],
        isLoading: true,
        isError: false
    },
    reducers: {
        setPosts(state, action) {
            return {
                ...state,
                items: action.payload,
                isLoading: false
            }
        },
        setIsLoading(state, action) {
            return {
                ...state,
                isLoading: action.payload
            }
        },
        setIsError(state, action) {
            return {
                ...state,
                isError: action.payload
            }
        }
    }
})

export default posts.reducer
export const { setIsError, setIsLoading, setPosts } = posts.actions


