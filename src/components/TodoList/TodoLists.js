import React from "react";
import "../style/css/TodoLists.css";
import TodoItems from "./TodoItems";

function TodoLists({ todos, putClick, delClick }) {
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
          {todos.map((todo, index) => (
            <TodoItems
              index={todo.id}
              text={todo.text}
              key={index}
              putClick={putClick}
              delClick={delClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoLists;
