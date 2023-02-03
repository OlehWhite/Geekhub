import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../utilits/get-posts";
import "./home.scss"
import {Box, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

export const Home = () => {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchPosts())
    }, [])

  return (
      <Box className="wrapper">
          {posts.map((post, index) => (
              <NavLink to="/post"
                  className="item"
                  key={index}
              >
                  <Typography className="list-title">
                      <span className="big_text">Title: </span>
                      {post.title}
                  </Typography>
                  <Typography className="list-score"
                  ><span className="big_text">Score: </span>
                      {post.score}
                  </Typography>
                  <Typography className="list-by">
                      <span className="big_text">Author: </span>
                      {post.by}
                  </Typography>
                  <Typography className="list-time">
                      <span className="big_text">Data: </span>
                      {(new Date(post.time * 1000)).toString()}
                  </Typography>
              </NavLink>
          ))}
      </Box>
  )
}