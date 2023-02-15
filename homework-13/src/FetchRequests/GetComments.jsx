import { setIsError, setIsLoading, setComments } from "../Store/CommentsStore";

export function fetchComments(kids) {
    return (dispatch) => {
        try {
            dispatch(setComments([]))
            const commentKids = kids.map(kid => fetch(`https://hacker-news.firebaseio.com/v0/item/${kid}.json?print=pretty`)
                .then(response => response.json())
                .then(json => json))
            Promise.all(commentKids)
                .then(response => dispatch(setComments(response)))
        } catch (error) {
            dispatch(setIsError(true))
            dispatch(setIsLoading(false))
        }
    }
}