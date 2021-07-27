import React from "react";
import "./style/css/Todo.css";
import TodoForm from "./TodoForm";
import TodoLists from "./TodoLists";

function Todo() {
  const onChange = () => {};
  const onClickInput = () => {};
  const onClickDel = () => {};
  return (
    <div className="body">
      <div className="header">
        <h1>TODO LIST</h1>
      </div>
      <TodoForm onChange={onChange} onClick={onClickInput} />
      <TodoLists
        index={"1"}
        text={"Welcome to Wooahan Agile"}
        onClick={onClickDel}
      />
    </div>
  );
}

export default Todo;
