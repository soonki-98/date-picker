import React, { useState } from "react";
import Calendar from "./components/Calendar/Calendar";
import Todo from "./components/containers/Todo";
import "./App.css";

function App() {
  const newDate = new Date();
  const [startDate, setStartDate] = useState(newDate);
  const onChange = (date) => {
    setStartDate(date);
  };
  return (
    <div>
      <Calendar startDate={startDate} onChange={onChange} />
      <Todo />
    </div>
  );
}

export default App;
