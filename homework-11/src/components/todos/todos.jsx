import { useEffect, useState } from "react";
import useUrlState from "@ahooksjs/use-url-state";
import { useParams } from "react-router";
import { Loader } from "../loader";
import { Link } from "react-router-dom";

import "./todos.css"

export const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [statusTodos, setStatusTodos] = useState(false);
    const [statusAlphabet, setStatusAlphabet] = useState(false);
    const [urlStatusTodos, setUrlStatusTodos] = useUrlState({});
    const [urlStatusAlphabet, setUrlStatusAlphabet] = useUrlState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos/`)
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [id])

    const onChangeCompletedTodos = () => {
        setUrlStatusTodos(statusTodos
            ? { statusTodos: "uncompleted" }
            : { statusTodos: "completed" }
        )
        setStatusTodos(prevState => !prevState)
        setTodos([...todos].sort(
            (a, b) => statusTodos
            ? a.completed - b.completed
            : b.completed - a.completed
        ))
    }

    const onChangeByAlphabet = () => {
        setUrlStatusAlphabet(statusAlphabet
            ? { statusAlphabet: "z-a" }
            : { statusAlphabet: "a-z" }
        )
        setStatusAlphabet(prevState => !prevState)
        setTodos([...todos].sort((a, b) => statusAlphabet
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
                ? todos.map(todo =>
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