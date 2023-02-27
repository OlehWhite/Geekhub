import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Todos } from "../Todos";
import "./User.css";
import { MyUser } from "../../types/types";

export const User: React.FC = () => {
  const [user, setUser] = useState<MyUser>({ name: "" });
  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [userId]);

  return (
    <>
      <h1>User: {user.name}</h1>
      <Todos />
    </>
  );
};
