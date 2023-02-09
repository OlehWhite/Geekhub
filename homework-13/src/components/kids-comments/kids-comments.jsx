import { useState } from "react";
import { Box } from "@mui/material";
import { AllComments } from "../all-comments";

import "./kids-comments.scss"

export const KidsComments = ({ commentText, commentKids }) => {
    const [activeComment, setActiveComment] = useState(false)

    return (
        <>
            <Box
                onClick={() => setActiveComment((prevState) => !prevState)}
                className="global-comment">{commentText}</Box>
            <Box>
                {commentKids.kids === undefined
                    ? (!activeComment
                        ? null
                        : <Box className="empty-comment">0 Comments</Box>)
                    : (!activeComment
                        ? null
                        : commentKids.kids.map((item, index) =>
                        <AllComments
                            key={index}
                            item={item}
                            commentKids={commentKids}/>))}
            </Box>
        </>
    )
}