import {setIsError, setIsLoading, setPosts} from "../store/posts";

const BASE_USERS_ID_URL = "https://hacker-news.firebaseio.com/v0/newstories.json?orderBy=%22$key%22&limitToFirst=100"
const BASE_NEW_ITEM_URL = "https://hacker-news.firebaseio.com/v0/item/"

export function fetchPosts() {
    return async (dispatch) => {
        try {
            // setInterval(() => {
                fetch(BASE_USERS_ID_URL)
                    .then(response => response.json())
                    .then(json => {
                        json.map(id => {
                            fetch(`${BASE_NEW_ITEM_URL}${id}.json`)
                                .then(response => response.json())
                                .then(json => dispatch(setPosts(json)))
                        })
                    })
                // }, 5000)

        } catch (error) {
            dispatch(setIsError(true));
            dispatch(setIsLoading(false))
            setTimeout(() => {
                dispatch(setIsError(false))
            }, 2000)
        }
    }

}