import { Box } from '@mui/material';
import { useState } from "react";

import "./navigation.scss"

import { Contacts } from "./contacts";
import { AboutUs } from "./about-us";
import { Theme } from "./theme";
import { Logo } from "./logo";
import { Docs } from "./docs";
import { Blog } from "./blog";

export const Navigation = ({ onChange }) => {
    const [nav, setNav] = useState(false);
    const [colorTheme, setColorTheme] = useState()

    const handelNameChange = (valueColor) => {
        setColorTheme(valueColor)
        onChange(valueColor)
    }

    return (
        <Box className="wrapper-navigation">
            <Logo className="navigation-logo" />
            <Box
                style={{background: colorTheme ? "#121212" : "white"}}
                className={nav ? "buttons-information" : "active"}>
                <Docs className="button" />
                <Contacts className="button" />
                <AboutUs className="button" />
                <Blog className="button" />
                <Theme
                    className="button"
                    onChange={handelNameChange}
                />
            </Box>
            <Box
                onClick={() => setNav(!nav)}
                className="navigation-menu"
                component="img"
                src={nav
                    ? "https://www.pngmart.com/files/8/Multiplication-Sign-PNG-Image.png"
                    : "https://cdn-icons-png.flaticon.com/512/1636/1636053.png"
                }
                alt="menu"
            />
        </Box>
    )
}