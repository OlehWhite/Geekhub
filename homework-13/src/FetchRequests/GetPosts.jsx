import { setIsError, setIsLoading, setPosts } from "../Store/PostsStore";

const BASE_USERS_ID_URL = "https://hacker-news.firebaseio.com/v0/newstories.json?orderBy=%22$key%22&limitToFirst=100"

export function fetchPosts() {

    return async (dispatch) => {
        try {
            dispatch(setPosts([]))
            dispatch(setIsLoading(true))
            fetch(BASE_USERS_ID_URL)
                .then(response => response.json())
                .then(json => {
                    const allPosts = json.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                        .then(response => response.json())
                        .then(json => json))
                    Promise.all(allPosts)
                        .then(response => dispatch(setPosts(response)))
                })
        } catch (error) {
            dispatch(setIsError(true))
            dispatch(setIsLoading(false))
        }
    }
}