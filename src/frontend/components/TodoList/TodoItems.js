import React from "react";
import { db } from "../../../backend/db";
console.log(db.color);
function TodoItems() {
  return <li color={db.color}>{db.title}</li>;
}

export default TodoItems;
