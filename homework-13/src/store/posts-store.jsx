import { createSlice } from "@reduxjs/toolkit";

const posts = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        setPosts(state, action) {
            state.push(action.payload)
        },
        setIsLoading(state, action) {
            return {
                ...state,
                isLoading: action.payload,
            }
        },
        setIsError(state, action) {
            return {
                ...state,
                isError: action.payload,
            }
        }
    }
})

export default posts.reducer
export const { setIsError, setIsLoading, setPosts } = posts.actions


