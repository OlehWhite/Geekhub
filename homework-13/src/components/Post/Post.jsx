import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Link } from "@mui/material";

import { fetchPost } from "../../action/getPost";
import { Comments } from "../Comments";

import "./Post.scss"
import {Loader} from "../Loader";

export const Post = () => {
    const dispatch = useDispatch();
    const {
        items: post,
        isLoading
    } = useSelector(state => state.post)
    const { id } = useParams()

    useEffect( () => {
        dispatch(fetchPost(id));
    }, [id])

    const reloadComments = () => {
        dispatch(fetchPost(id));
    }

    return (
        <><Box className="wrapper-home">
            <Button
                to="/"
                component={NavLink}
                className="link-home"
                variant="contained"
                onClick={reloadComments}
            >Home
            </Button>
            <Button
                variant="contained"
                onClick={reloadComments}
            >Reload
            </Button>
        </Box>
            {isLoading ? <Loader /> :
                (<Box className="post">
                    <Link
                        href={post.url}
                        color="inherit"
                    >
                        <Box className="big-text">Link: </Box>
                        {post.url}
                    </Link>
                    <Box>
                        <Box className="big-text">Title: </Box>
                        {post.title}
                    </Box>
                    <Box>
                        <Box className="big-text">Data: </Box>
                        {new Date(post.time * 1000).toISOString().slice(0, 19).replace('T', ' ')}
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
                            : "Has no Comments yet"}
                    </Box>
                </Box>)
            }
        </>
    )
}