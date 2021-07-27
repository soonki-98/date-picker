import React from "react";
import "./style/css/TodoForm.css";

function TodoForm({ onClick, onChange }) {
  return (
    <div className="addTodo">
      <input
        onChange={onChange}
        className="inputTodo"
        type="text"
        placeholder="할 일을 입력하세요"
      />
      <button onClick={onClick} className="inputBtn">
        Input
      </button>
    </div>
  );
}
export default TodoForm;
