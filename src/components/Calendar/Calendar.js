import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ startDate, onChange }) => {
  return <DatePicker selected={startDate} onChange={onChange} />;
};

export default Calendar;
