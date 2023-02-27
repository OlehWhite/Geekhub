import { setIsError, setIsLoading, setPost } from "../store/postStore";

export function fetchPost(id) {

    return (dispatch) => {
        try {
            dispatch(setPost([]))
            dispatch(setIsLoading(true))
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                .then(response => response.json())
                .then(json => dispatch(setPost(json)))
        } catch (error) {
            dispatch(setIsError(true))
            dispatch(setIsLoading(false))
        }
    }
}