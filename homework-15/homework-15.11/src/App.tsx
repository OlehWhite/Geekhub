import { useRoutes} from "react-router-dom";
import { Layout } from "./components/Layout";
import { User } from "./components/User";
import { Todo } from "./components/Todo";
import { Home } from "./components/Home";

import './App.css'

function App(): JSX.Element {
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
