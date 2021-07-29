import React, { useState } from "react";
import "./style/css/TodoForm.css";

function TodoForm() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const req = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        description: text,
      }),
    };

    fetch("http://localhost:9800/api/todolist", req)
      .then((res) => res.json())
      .then((data) => console.log(data));
    setText("");
    console.log(text);
  };
  return (
    <div className="addTodo">
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          className="inputTodo"
          type="text"
          placeholder="할 일을 입력하세요"
        />
        <button className="inputBtn">Input</button>
      </form>
    </div>
  );
}
export default TodoForm;
