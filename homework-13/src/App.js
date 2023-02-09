import './App.css';
import {createTheme, ThemeProvider} from "@mui/material";
import {useRoutes} from "react-router-dom";
import {Posts} from "./components/posts";
import {Post} from "./components/post";

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
