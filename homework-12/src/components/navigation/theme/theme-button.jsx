import { Button } from "@mui/material";
import { useState } from "react";

export const Theme = ({ onChange }) => {
    const [onChangeTheme, setOnChangeTheme] = useState(true)

    const onChangeThemes = () => {
        setOnChangeTheme((prevActive) => !prevActive)
        onChange(onChangeTheme)
    }

    return (
        <Button
            onClick={onChangeThemes}
            variant="outlined"
            style={{ marginRight: "5px" }}
        >
            Light / Dark theme switcher
        </Button>
    )
}