import React, { useRef, useState } from "react";
import "../style/css/Todo.css";
import TodoForm from "../TodoList/TodoForm";
import TodoLists from "../TodoList/TodoLists";
import apeach from "../style/img/apeach.png";

function Todo() {
  const [text, setText] = useState("");
  // fetch("http://localhost:9800/api/todolist")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "hello0",
    },
    {
      id: 2,
      text: "hello1",
    },
    {
      id: 3,
      text: "hello2",
    },
  ]);

  const inputRef = useRef(null);
  const idRef = useRef(3);

  const onSubmit = (e) => {
    const req = {
      method: "POST",
      headers: { "Content-Type": " application/json; charset=utf-8" },
      body: JSON.stringify({
        description: text,
      }),
    };
    e.preventDefault();
    idRef.current += 1;
    setTodos([...todos, { id: idRef.current, text: text }]);
    fetch("http://localhost:9800/api/todolist", req)
      .then((res) => res.text())
      .then((data) => console.log(data));
    inputRef.current.value = "";
    setText("");
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const putClick = (id) => {
    const updTodos = todos.map((el) =>
      el.id === id ? (el.text = text) : el.text
    );
    inputRef.current.value = "";
    setText("");
    console.log(updTodos);
  };

  const delClick = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
    todos.map((el) => (el.id > id ? (el.id -= 1) : el.id));
    idRef.current -= 1;
    // fetch(`http://localhost:9800/api/todolist/${}`)
    //   .then((res) => res.text())
    //   .then((data) => console.log(data));
  };
  return (
    <div className="body">
      <div className="header">
        <h1>TODO LIST</h1>
        <img alt="apeach" src={apeach} width="100px" height="100px" />
      </div>
      <TodoForm inputRef={inputRef} onSubmit={onSubmit} onChange={onChange} />
      <TodoLists todos={todos} putClick={putClick} delClick={delClick} />
    </div>
  );
}

export default Todo;
