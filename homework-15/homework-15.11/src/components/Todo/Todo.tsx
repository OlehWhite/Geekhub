import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Loader } from "../Loader";

import { MyTodo, MyUseParams } from "../../types";

import "./todo.css";

export const Todo: React.FC = () => {
  const [todo, setTodo] = useState<MyTodo>();
  const { id, userId } = useParams<MyUseParams>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos?id=${userId}`)
      .then((response) => response.json())
      .then((json) => setTodo(json[0]));
  }, [id, userId]);

  return (
    <div>
      <h2>More information</h2>
      {todo ? (
        <div key={todo.id} className="more-information">
          <p>
            <span className="todo-text">Title:</span> {todo.title}
          </p>
          <p>
            <span className="todo-text">UserID:</span> {todo.userId}
          </p>
          <p>
            <span className="todo-text">Task:</span> {todo.id}
          </p>
          <p>
            <span className="todo-text">Completed:</span>{" "}
            {todo.completed ? <span>✅</span> : <span>❌</span>}
          </p>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
