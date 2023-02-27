import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import "./AllComments.scss";

export const AllComments = ({ item }) => {
  const [kidsComment, setKidsComment] = useState([]);
  const [allCommentsKids, setAllCommentsKids] = useState([]);

  useEffect(() => {
    fetch(
      `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`
    )
      .then((response) => response.json())
      .then((json) => setKidsComment(json));
  }, [item]);

  useEffect(() => {
    if (kidsComment.kids !== undefined) {
      const kidsComm = kidsComment.kids.map((_) =>
        fetch(
          `https://hacker-news.firebaseio.com/v0/item/${_}.json?print=pretty`
        )
          .then((response) => response.json())
          .then((json) => json)
      );
      Promise.all(kidsComm).then((response) => setAllCommentsKids(response));
    }
  }, [kidsComment]);

  return (
    <Box className="kids-comment">
      <Box dangerouslySetInnerHTML={{ __html: kidsComment.text }} />

      <Box className="all-comments-kids">
        <Box dangerouslySetInnerHTML={{ __html: allCommentsKids.text }} />

        {allCommentsKids.length > 0 ? (
          allCommentsKids.map((item, index) => (
            <Box key={index} dangerouslySetInnerHTML={{ __html: item.text }} />
          ))
        ) : (
          <Box>0 Comments</Box>
        )}
      </Box>
    </Box>
  );
};
