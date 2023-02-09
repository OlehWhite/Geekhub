import { createSlice } from "@reduxjs/toolkit";

const postStore = createSlice({
    name: 'post',
    initialState: [],
    reducers: {
        setPost(state, action) {
            return action.payload
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

export default postStore.reducer
export const { setIsError, setIsLoading, setPost } = postStore.actions


