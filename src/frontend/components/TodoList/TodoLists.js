import React from "react";
import "./style/css/TodoLists.css";

function TodoLists({ index, onClick, text }) {
  return (
    <div className="todoTables">
      <table>
        <thead>
          <tr>
            <td id="index">ID</td>
            <td id="text">TODO'S</td>
            <td id="del"></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="index">{index}</td>
            <td id="text">{text}</td>
            <td id="del">
              <button className="delBtn" onClick={onClick}>
                DEL
              </button>
            </td>
            <td id="update">
              <button className="updBtn" onClick={onClick}>
                UPDATE
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoLists;
