import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import "./posts.scss"

export const Posts = () => {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(json => {
                setUsers(json.results);
            })
    }, [])

    return (
        <Box className="wrapper-posts">
            {users ? users.map((user, index) => (
                <Box
                    key={index}
                    className="wrapper-postStore"
                >
                    <Box
                        className="img_sw"
                        component="img"
                        src="https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200"
                        alt="star-wars"/>
                    <Typography variant="h4">{user.name}</Typography>
                    <Typography>Height: {user.height}</Typography>
                    <Typography>Gender: {user.gender}</Typography>
                    <Typography>Mass: {user.mass}</Typography>
                    <Typography>Hair Color: {user.hair_color}</Typography>
                    <Typography>Skin Color: {user.skin_color}</Typography>
                </Box>
            )) : <CircularProgress
                style={{marginTop: "200px"}}
                color="inherit"
                size={100}
            />
            }
        </Box>
    )
}