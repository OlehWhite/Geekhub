import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useUrlState from "@ahooksjs/use-url-state";
import { Loader } from "../loader";

export const Home = () => {
    const [allTodos, setAllTodos] = useState([]);
    const [statusTodos, setStatusTodos] = useState(false);
    const [statusAlphabet, setStatusAlphabet] = useState(false);
    const [urlStatusTodos, setUrlStatusTodos] = useUrlState({});
    const [urlStatusAlphabet, setUrlStatusAlphabet] = useUrlState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(response => response.json())
            .then(json => setAllTodos(json))
    }, [])

    const onChangeCompletedTodos = () => {
        setUrlStatusTodos(statusTodos
            ? { statusTodos: "uncompleted" }
            : { statusTodos: "completed" }
        )
        setStatusTodos(prevState => !prevState)
        setAllTodos([...allTodos].sort(
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
        setAllTodos([...allTodos].sort((a, b) => statusAlphabet
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
            >Sort ToDo</button>
            <button
                className={"btn-filter__alphabet"}
                onClick={onChangeByAlphabet}
            >Sort Alphabet</button>
            {allTodos.length > 0
                ? allTodos.map(todo =>
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