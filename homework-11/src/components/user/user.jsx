import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {Todos} from "../todos";
import "./user.css"

export const User = () => {
    const [user, setUser] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
    }, [id])

    return(
        <>
            <h1>User: {user.name}</h1>
            <Todos />
        </>
    )
}