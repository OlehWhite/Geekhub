import { createSlice } from "@reduxjs/toolkit";

const commentsStore = createSlice({
    name: 'comments',
    initialState: {
        items: [],
        isLoading: true,
        isError: false
    },
    reducers: {
        setComments(state, action) {
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

export default commentsStore.reducer
export const { setIsError, setIsLoading, setComments } = commentsStore.actions


