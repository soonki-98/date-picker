import React, { useState } from "react";
import "./style/css/TodoForm.css";

function TodoForm() {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onClick = () => {
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
