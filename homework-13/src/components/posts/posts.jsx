import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

import { fetchPosts } from "../../fetch-requests/get-posts";

import "./posts.scss"

export const Posts = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchPosts());
        const interval = setInterval(() => {
            window.location.reload();
            dispatch(fetchPosts());
        }, 60000)

        return () => clearInterval(interval)
    }, []);

    const reloadPage = () => {
        window.location.reload();
    };

    return (
      <Box className="wrapper">
          <Box className="wrapper-btn">
              <Button
                  variant="contained"
                  onClick={reloadPage}
              >
                  Reload</Button>
          </Box>
          {posts.map((post, index) => (
              <NavLink to={`/post/${post.id}`}
                  className="item"
                  key={index}
              >
                  <Box>
                      <Box className="big_text">Title: </Box>
                      {post.title}
                  </Box>
                  <Box>
                      <Box className="big_text">Score: </Box>
                      {post.score}
                  </Box>
                  <Box>
                      <Box className="big_text">Author: </Box>
                      {post.by}
                  </Box>
                  <Box>
                      <Box className="big_text">Data: </Box>
                      {(new Date(post.time * 1000)).toString()}
                  </Box>
              </NavLink>
          ))}
      </Box>
  )
}