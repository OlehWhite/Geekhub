import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Todos } from "../Todos";
import "./user.css"
import {MyUseParams, MyUser} from "../../types";

export const User: React.FC = () => {
    const [user, setUser] = useState<MyUser>({ name: '' });
    const { id } = useParams<MyUseParams>();

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