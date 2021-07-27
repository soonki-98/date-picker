import React, { useState } from "react";
import "./style/css/TodoForm.css";

function TodoForm() {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    console.log(text);
    // const req = {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     //   description:
    //   }),
    // };

    // fetch("url", req);
  };
  const onChange = (e) => {
    setText(e.target.value);
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
