import './App.css';

import { CssBaseline, createTheme, ThemeProvider } from "@mui/material"
import { Navigation } from "./components/Navigation";
import { useState } from "react";
import { Posts } from "./components/Posts";

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
    const [colorTheme, setColorTheme] = useState(true)

    return (
        <ThemeProvider theme={colorTheme ? themeLight : themeDark}>
            <CssBaseline className="App">
                <Navigation setColorTheme={setColorTheme}/>
                <Posts />
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;
