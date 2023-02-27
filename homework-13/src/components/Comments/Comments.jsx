import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

import { fetchComments } from "../../action/getComments";
import { KidsComments } from "../KidsComments";

import "./Comment.scss"

export const Comments = ({ kids }) => {
    const { items: comments } = useSelector(state => state.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComments(kids));
    }, [kids])

    return (
        <Box>
            {comments.length >= 0 && comments.map((comment, index) => (
                <Box
                    key={index}
                    className="comment"
                >
                    {comment.text === undefined
                        ? '❌ Deleted message'
                        : <KidsComments
                            commentText={comment.text}
                            commentKids={comment}
                        />
                }
                </Box>
            )
            )}
        </Box>
    )
}