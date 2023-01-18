import {Routes, Route, useRoutes} from "react-router-dom";
import { Layout } from './components/layout';
import { Users } from "./components/users";
import { User } from "./components/user";

import './App.css'

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <div>Home</div> },
        { path: 'users', element: <Users /> },
        { path: 'users/:id', element: <User />,
        children: [
            { path: 'edit', element: <div>Edit</div> },
            { path: 'albums', element: <div>Albums</div> }
        ]},
        { path: 'about', element: <div>Album</div> },
          { path: '*', element: <div>Not Found</div> }
      ]
    }
  ])

  return (
    <div className="App">
        {element}
    </div>
  );
}

export default App;
