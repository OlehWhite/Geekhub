import { useRoutes} from "react-router-dom";
import { Layout } from "./components/layout";
import { User } from "./components/user";
import { Todo } from "./components/todo";

import './App.css'

function App() {
    const element = useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <div>Home</div> },
                { path: ":id", element: <User /> },
                { path: ":id/todos/:id", element: <Todo /> },
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
