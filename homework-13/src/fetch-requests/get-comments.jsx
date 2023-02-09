import { setIsError, setIsLoading, setComments } from "../store/comments-store";

export function fetchComments(kids) {
    return (dispatch) => {
        try {
            kids.map(kid => fetch(`https://hacker-news.firebaseio.com/v0/item/${kid}.json?print=pretty`)
                .then(response => response.json())
                .then(json => dispatch(setComments(json))))
        } catch (error) {
            dispatch(setIsError(true))
            dispatch(setIsLoading(false))
            setTimeout(() => {
                dispatch(setIsError(false))
            }, 2000)
        }
    }
}