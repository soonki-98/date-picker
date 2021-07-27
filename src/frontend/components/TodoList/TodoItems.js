import React from "react";

function TodoItems({ index, text }) {
  const delClick = () => {
    // fetch("url", {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json)
    //   .then((data) => console.log(data  ));
  };
  const putClick = () => {
    // const req = {
    //   method: "PUT",
    //   header: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     describtion: "blabla",
    //   }),
    // };
    // fetch("url", req).then().then();
  };
  return (
    <tr>
      <td id="index">{index}</td>
      <td id="text">{text}</td>
      <td id="del">
        <button onClick={delClick} className="delBtn">
          DEL
        </button>
      </td>
      <td id="update">
        <button onClick={putClick} className="updBtn">
          UPDATE
        </button>
      </td>
    </tr>
  );
}

export default TodoItems;
