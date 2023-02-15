import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

import { fetchPosts } from "../../FetchRequests/GetPosts";

import "./posts.scss"
import { Loader } from "../Loader";

export const Posts = () => {
    const dispatch = useDispatch();
    const {
        items: posts,
        isLoading
    } = useSelector(state => state.posts);

    useEffect( () => {
        dispatch(fetchPosts());

        setInterval(() => {
            dispatch(fetchPosts());
        }, 60000)

    }, []);

    const reloadPosts = () => {
        dispatch(fetchPosts());
    };

    return (
        <Box className="wrapper">
            <Box className="wrapper-btn">
                <Button variant="contained" onClick={reloadPosts}>
                   Reload
                </Button>
            </Box>
            {isLoading
                ? (<Loader />)
                : posts.map((post, index) => (
                <NavLink to={`/post/${post.id}`}
                  className="item"
                  key={index}
                >
                    <Box><Box className="big_text">Title: </Box>
                        {post.title}
                    </Box>
                    <Box><Box className="big_text">Score: </Box>
                       {post.score}
                    </Box>
                    <Box><Box className="big_text">Author: </Box>
                        {post.by}
                    </Box>
                    <Box><Box className="big_text">Data: </Box>
                        {new Date(post.time * 1000).toISOString().slice(0, 19).replace('T', ' ')}
                    </Box>
                </NavLink>
            ))
          }
        </Box>
    )
}