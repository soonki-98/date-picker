import React, { useState } from "react";
import TodoItems from "./TodoItems";
import "./Todo.css";

function Todo({ selectedDate }) {
  const [text, setText] = useState("");
  const input = document.querySelector(".input");

  function onChange(e) {
    setText(e.target.value);
  }

  function onClick() {
    console.log(text);
    input.value = "";
  }

  return (
    <div className="body">
      <div className="header">
        <h1>{selectedDate} 투두 리스트</h1>
      </div>
      <div className="addTodo">
        <input
          className="input"
          type="text"
          placeholder="할 일을 입력하세요"
          onChange={onChange}
        />
        <button onClick={onClick}>입력</button>
      </div>
      <div className="todo">
        <ul>
          <TodoItems />
        </ul>
      </div>
    </div>
  );
}

export default Todo;
