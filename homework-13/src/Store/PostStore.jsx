import { createSlice } from "@reduxjs/toolkit";

const postStore = createSlice({
    name: 'post',
    initialState: {
        items: [],
        isLoading: true,
        isError: false
    },
    reducers: {
        setPost(state, action) {
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

export default postStore.reducer
export const { setIsError, setIsLoading, setPost } = postStore.actions


