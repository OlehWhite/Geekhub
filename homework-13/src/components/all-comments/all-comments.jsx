import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import "./all-comments.scss"

export const AllComments = ({ item }) => {
    const [kidsComment, setKidsComment] = useState([]);
    const [allCommentsKids, setAllCommentsKids] = useState([])

    useEffect(() => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
            .then(response => response.json())
            .then(json => setKidsComment(json))

    }, [])

    useEffect(() => {
        if (kidsComment.kids !== undefined) {
        kidsComment.kids.map(_ => fetch(`https://hacker-news.firebaseio.com/v0/item/${_}.json?print=pretty`)
            .then(response => response.json())
            .then(json => setAllCommentsKids(json)))
        }
        console.log(kidsComment)
        console.log(allCommentsKids.text)
    }, [kidsComment || allCommentsKids])

    return (
    <>
        <Box className="kids-comment">
            {kidsComment.text}
            <Box className="all-comments-kids">{allCommentsKids.text}</Box>
        </Box>
    </>)
}