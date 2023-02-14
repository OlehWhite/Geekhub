import "../../../App.css"

import logo from "../../../logo.svg"
import { Box } from "@mui/material";

import "./logo.scss"

export const Logo = () => {

    return (
        <Box
            className="App-logo logo"
            component="img"
            src={logo}
            alt="logo"
        />
    )
}