import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Link } from "@mui/material";

import { fetchPost } from "../../fetch-requests/get-post";
import { Comments } from "../comments";

import "./post.scss"

export const Post = () => {
    const dispatch = useDispatch();
    const post = useSelector(state => state.post)
    const { id } = useParams()

    useEffect( () => {
        dispatch(fetchPost(id));
    }, [])

    const reloadComments = () => {
        window.location.reload();
    }

    return (
        <>
            <Box className="wrapper-home">
                <Button
                    className="btn-home"
                    variant="contained"
                    onClick={reloadComments}
                >
                    <NavLink
                        className="link-home"
                        to="/"
                    >Home
                    </NavLink>
                </Button>
                <Button
                    variant="contained"
                    onClick={reloadComments}
                >Reload
                </Button>
            </Box>
            <Box className="post">
                <Link
                    href={post.url}
                    color="inherit"
                >
                    <Box className="big-text">Link: </Box>
                    {post.url && post.url.length >= 0
                        ? post.url
                        : "None"}
                </Link>
                <Box>
                    <Box className="big-text">Title: </Box>
                    {post.title && post.title.length >= 0
                        ? post.title
                        : "None"}
                </Box>
                <Box>
                    <Box className="big-text">Data: </Box>
                    {(new Date(post.time * 1000)).toString()}
                </Box>
                <Box>
                    <Box className="big-text">Name: </Box>
                    {post.by}
                </Box>
                <Box>
                    <Box className="big-text">Comments: </Box>
                    {post.kids && post.kids.length >= 0
                        ? post.kids.length
                        : "0"}
                </Box>
                <Box>
                    {post.kids && post.kids.length >= 0
                    ? <Comments kids={post.kids} />
                    : "Has no comments yet"}
                </Box>
            </Box>
        </>
    )
}