import './App.css';

import { CssBaseline, createTheme, ThemeProvider } from "@mui/material"
import { Navigation } from "./components/navigation";
import { useState } from "react";
import { Body } from "./components/body";

const themeLight = createTheme({
    palette: {
        mode: 'light',
    },
})

const themeDark = createTheme({
    palette: {
        mode: 'dark',
    }
})

function App() {
    const [colorTheme, setColorTheme] = useState()

    const handelNameChange = (valueColor) => {
        setColorTheme(valueColor)
    }

    return (
        <ThemeProvider theme={colorTheme ? themeDark : themeLight}>
            <CssBaseline className="App">
                <Navigation onChange={handelNameChange}/>
                <Body />
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;
