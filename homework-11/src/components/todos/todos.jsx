import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {Link} from "react-router-dom";

import "./todos.css"

export const Todos = () => {
    const [todos, setTodos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [id])

    return (
        <>
            <button>Sort ToDo</button>
            {todos.map(todo =>
                <div className="todo-item" key={todo.id}>
                    <Link to={`todos/${todo.id}`}>
                        {todo.completed ? <span>✅</span> : <span>❌</span>}
                        {todo.title}
                    </Link>
                </div>
            )}
        </>
    )
}