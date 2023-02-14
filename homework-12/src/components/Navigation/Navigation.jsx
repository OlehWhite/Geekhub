import { Box, Button, useTheme } from '@mui/material';
import { useState } from "react";
import "./navigation.scss"
import { Logo } from "./Logo";
import { Buttons } from "./Buttonst";

export const Navigation = ({ setColorTheme }) => {
    const [isShowMenu, setIsShowMenu] = useState(true);
    const { palette } = useTheme()

    return (
        <Box className="wrapper-navigation">
            <Logo className="navigation-logo" />
            <Box
                style={{background: palette.background.paper}}
                className={isShowMenu ? "active" : "buttons-information"}>
                <Buttons />
                <Button
                    onClick={() => setColorTheme(prevState => !prevState)}
                    variant="outlined"
                    style={{ marginRight: "5px" }}
                    >Light / Dark theme switcher
                </Button>
            </Box>
            <Box
                onClick={() => setIsShowMenu( prevState => !prevState)}
                className="navigation-menu"
                component="button"
                alt="menu"
            >
                <Box className={isShowMenu ? "line-open" : "line-close"}></Box>
                <Box className={isShowMenu ? "line-open" : "line-close"}></Box>
                <Box className={isShowMenu ? "line-open" : "line-close"}></Box>
            </Box>
        </Box>
    )
}