import { useEffect, useState } from "react";
import useUrlState from "@ahooksjs/use-url-state";
import { useParams } from "react-router";
import { Loader } from "../loader";
import { Link } from "react-router-dom";

import { MyTodos, MyUseParams, MyUseUrlState } from "../../types"

import "./todos.css"

export const Todos = () => {
    const [todos, setTodos] = useState<MyTodos[]>([]);
    const [urlStatus, setUrlStatus] = useUrlState<MyUseUrlState>();
    const { id } = useParams<MyUseParams>()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos/`)
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [id])

    const onChangeCompletedTodos = () => {
        urlStatus.status === "completed"
            ? setUrlStatus({ status: "uncompleted" })
            : setUrlStatus({ status: "completed" })

        setTodos(todos.sort((a, b) =>
            urlStatus.status === "completed"
                ? a.completed - b.completed
                : b.completed - a.completed
        ))
    }

    const onChangeByAlphabet = () => {
        urlStatus.status === "a-z"
            ? setUrlStatus({ status: "z-a" })
            : setUrlStatus({ status: "a-z" })

        setTodos(todos.sort((a, b) =>
            urlStatus.status === "a-z"
                ? a.title < b.title ? 1 : -1
                : a.title > b.title ? 1 : -1
        ))
    }

    return (
        <>
            <button
                className="btn-filter__todo"
                onClick={onChangeCompletedTodos}
            >Sort ToDo</button>
            <button
                className={"btn-filter__alphabet"}
                onClick={onChangeByAlphabet}
            >Sort Alphabet</button>
            {todos.length > 0
                ? todos
                    .sort((a, b): number => {
                        if (urlStatus.status === "uncompleted") {
                            return a.completed - b.completed
                        } else if (urlStatus.status === "completed") {
                            return b.completed - a.completed
                        } else if (urlStatus.status === "z-a") {
                            return a.title < b.title ? 1 : -1
                        } else {
                            return a.title > b.title ? 1 : -1
                        }
                    })
                    .map(todo =>
                <div className="todo-item" key={todo.id}>
                    <Link to={`todos/${todo.id}`}>
                        {todo.completed ? <span>✅</span> : <span>❌</span>}
                        {todo.title}
                    </Link>
                </div>
                )
                : <Loader />
            }
        </>
    )
}