import React from "react";
import "../style/css/TodoForm.css";

function TodoForm({ onSubmit, onChange, inputRef }) {
  return (
    <div className="addTodo">
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
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
