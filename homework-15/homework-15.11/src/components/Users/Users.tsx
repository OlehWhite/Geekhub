import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Users.css";
import { MyUsers } from "../../types/types";

export const Users: React.FC = () => {
  const [users, setUsers] = useState<MyUsers[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <ul className="list-users">
      {users.map((user) => (
        <li key={user.id} className="item-user">
          <NavLink className="nav-link" to={`${user.id}`}>
            {user.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
