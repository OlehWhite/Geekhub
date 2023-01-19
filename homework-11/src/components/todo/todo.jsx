import { useEffect, useState } from "react";
import { useParams } from "react-router";

import "./todo.css"

export const Todo = () => {
    const [todo, setTodo] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos?id=${id}`)
            .then(response => response.json())
            .then(json => setTodo(json))
    }, [id])

    return (
        <div>
            <h2>More information</h2>
            {todo.map(todo =>
                <div
                    key={todo.id}
                    className="more-information"
                >
                    <p><span className="todo-text">Title:</span> {todo.title}</p>
                    <p><span className="todo-text">UserID:</span> {todo.userId}</p>
                    <p><span className="todo-text">Task:</span> {todo.id}</p>
                    <p><span className="todo-text">Completed:</span> {todo.completed ? <span>✅</span> : <span>❌</span>}</p>
                </div>
            )}
        </div>
    )
}