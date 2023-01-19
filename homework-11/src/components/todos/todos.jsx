import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {Link} from "react-router-dom";

import "./todos.css"
import {logDOM} from "@testing-library/react";

export const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [todosTrue, setTodosTrue] = useState([]);
    const [todosFalse, setTodosFalse] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [id])

    useEffect(() => {
        setTodos([...todosTrue, ...todosFalse]);
    }, [todosTrue, todosFalse])

    const functionSortTrueTodoAndFalse = () => {
        setTodosTrue([...todos].filter(item => item.completed === true));
        setTodosFalse([...todos].filter(item => item.completed === false));
    }

    return (
        <>
            <button onClick={functionSortTrueTodoAndFalse}>Sort ToDo</button>
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