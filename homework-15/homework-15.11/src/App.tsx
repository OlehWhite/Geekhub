import { useRoutes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { User } from "./components/User";
import { Todo } from "./components/Todo";
import { Home } from "./components/Home";

function App(): JSX.Element {
  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: ":userId", element: <User /> },
        { path: ":userId/todos/:todoId", element: <Todo /> },
        { path: "*", element: <div>Not Found</div> },
      ],
    },
  ]);

  return <div className="App">{element}</div>;
}

export default App;
