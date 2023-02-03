import './App.css';
import {useRoutes} from "react-router-dom";
import {Home} from "./components/home";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({})

export const App = () => {
    const elements = useRoutes([
        { path: "/", element: <Home/> },
        { path: "post", element: <div>Post</div> },
        { path: '*', element: <div>Not Found</div> },
    ]);

  return (
      <ThemeProvider theme={theme}>
          {elements}
      </ThemeProvider>
  )
}

export default App;
