import { createSlice } from "@reduxjs/toolkit";

const commentsStore = createSlice({
    name: 'comments',
    initialState: [],
    reducers: {
        setComments(state, action) {
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

export default commentsStore.reducer
export const { setIsError, setIsLoading, setComments } = commentsStore.actions


