import React from "react";
import "./style/css/TodoLists.css";
import TodoItems from "./TodoItems";
const db = [
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
];

function TodoLists() {
  // fetch("url").then(res => res.json()).then(data => console.log(data));
  return (
    <div className="todoTables">
      <table>
        <thead>
          <tr>
            <td id="index">NO</td>
            <td id="text">TODO'S</td>
            <td id="del"></td>
          </tr>
        </thead>
        <tbody>
          {db.map((todos, index) => (
            <TodoItems index={todos.id} text={todos.text} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoLists;
