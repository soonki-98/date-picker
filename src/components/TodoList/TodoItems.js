import React from "react";

function TodoItems({ index, text, delClick, putClick }) {
  return (
    <tr>
      <td id="index">{index}</td>
      <td id="text">{text}</td>
      <td id="del">
        <button onClick={() => delClick(index)} className="delBtn">
          DEL
        </button>
      </td>
      <td id="update">
        <button onClick={() => putClick(index)} className="updBtn">
          UPDATE
        </button>
      </td>
    </tr>
  );
}

export default TodoItems;
