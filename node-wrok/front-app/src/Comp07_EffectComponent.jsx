import { useEffect, useState } from "react";

function Todo({ todos }) {
  return todos.map((todo) => <p key={todo.id}>{todo.title}</p>);
}

export default function EffectComponent() {
  let [count, setCount] = useState(1);
  function callAPI() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setTodo(json);
      });
  }
  // 렌더링 이후 한번 실행
  let [todos, setTodo] = useState([]);
  useEffect(() => {
    // callAPI();
    console.log("이펙트");
    return () => {
      console.log("clean up");
    };
  }, [count]);
  return (
    <>
      <h1>EffectComponent</h1>
      <div>
        <Todo todos={todos}></Todo>
      </div>
    </>
  );
}
