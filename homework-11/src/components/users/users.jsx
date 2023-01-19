import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import "./users.css"

export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])

    return(
        <>
            {users.map(user =>
                <div key={user.id}>
                    <NavLink className="nav-link" to={`${user.id}`}>{user.name}</NavLink>
                </div>
            )}
        </>
    )
}