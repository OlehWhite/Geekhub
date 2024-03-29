import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./users.css"

export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])

    return(
        <ul className="list-users">
            {users.map(user =>
                <li key={user.id} className="item-user">
                    <NavLink className="nav-link" to={`${user.id}`}>{user.name}</NavLink>
                </li>
            )}
        </ul>
    )
}