import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useUrlState from "@ahooksjs/use-url-state";

import { Loader } from "../loader";

import {MyTodos, MyUseUrlState} from "../../types";

export const Home = () => {
    const [allTodos, setAllTodos] = useState<MyTodos[]>([]);
    const [urlStatus, setUrlStatus] = useUrlState<MyUseUrlState>();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(response => response.json())
            .then(json => setAllTodos(json))
    }, [])

    const onChangeCompletedTodos = () => {
        urlStatus.status === "completed"
            ? setUrlStatus({ status: "uncompleted" })
            : setUrlStatus({ status: "completed" })

        setAllTodos(allTodos.sort((a, b) =>
            urlStatus.status === "completed"
                ? a.completed - b.completed
                : b.completed - a.completed
        ))
    }

    const onChangeByAlphabet = () => {
        urlStatus.status === "a-z"
            ? setUrlStatus({ status: "z-a" })
            : setUrlStatus({ status: "a-z" })

        setAllTodos(allTodos.sort((a, b) =>
            urlStatus.status === "a-z"
            ? a.title < b.title ? 1 : -1
            : a.title > b.title ? 1 : -1
        ))
    }

    return (
        <div>
            <h1>ToDos Of All Users</h1>
            <button
                className="btn-filter__todo"
                onClick={onChangeCompletedTodos}
                >Sort ToDo
            </button>
            <button
                className="btn-filter__alphabet"
                onClick={onChangeByAlphabet}
                >Sort Alphabet
            </button>
            {allTodos.length >= 0
                ? allTodos
                    .sort((a, b) => {
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
                        <Link to={`${todo.userId}/todos/${todo.id}`}>
                            {todo.completed ? <span>✅</span> : <span>❌</span>}
                            {todo.title}
                        </Link>
                    </div>)
                : <Loader />}
        </div>
    )
}