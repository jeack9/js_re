import { useEffect, useState } from "react";

export default function Fetch() {
  const [todos, setTodos] = useState([]);
  const callAPI = async () => {
    const url = process.env.NEXT_PUBLIC_TODO_URL;
    const result = await fetch(url);
    const data = await result.json();
    setTodos(data);
  };
  useEffect(() => {
    callAPI();
  }, []);
  return (
    <div>
      <h1>Fetch</h1>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
}
