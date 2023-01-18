import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";

export const User = () => {
    const [user, setUser] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(json => setUser(json))
    }, []);

    return (
        <>
            <h1>Users</h1>
        </>
    )
}
