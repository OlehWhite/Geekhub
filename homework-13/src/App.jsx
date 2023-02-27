import './App.css';
import {createTheme, ThemeProvider} from "@mui/material";
import {useRoutes} from "react-router-dom";
import {Posts} from "./components/Posts";
import {Post} from "./components/Post";

const theme = createTheme({});

export const App = () => {
    const elements = useRoutes([
        { path: "/", element: <Posts/> },
        { path: "post/:id", element: <Post /> },
        { path: '*', element: <div>Not Found</div> },
    ]);

  return (
      <ThemeProvider theme={theme}>
          {elements}
      </ThemeProvider>
  )
}

export default App;
