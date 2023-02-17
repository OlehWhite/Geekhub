import { useRoutes} from "react-router-dom";
import { Layout } from "./components/layout";
import { User } from "./components/user";
import { Todo } from "./components/todo";
import { Home } from "./components/home";

import './App.css'

function App() {
    const element = useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: "Todos/:userId", element: <Todo /> },
                { path: ":id", element: <User /> },
                { path: ":id/Todos/:userId", element: <Todo /> },
                { path: "*", element: <div>Not Found</div> },
            ]}
    ]);

    return (
        <div className="App">
            {element}
        </div>
    );
}

export default App;
