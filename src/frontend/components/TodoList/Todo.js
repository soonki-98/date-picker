import React from "react";
import "./style/css/Todo.css";
import TodoForm from "./TodoForm";
import TodoLists from "./TodoLists";

function Todo() {
  return (
    <div className="body">
      <div className="header">
        <h1>TODO LIST</h1>
      </div>
      <TodoForm />
      <TodoLists />
    </div>
  );
}

export default Todo;
