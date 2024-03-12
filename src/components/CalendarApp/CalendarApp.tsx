import { useState } from "react";
import Calendar from "react-calendar";
import "./CalendarApp.scss"


const CalendarApp = () => {
  const [date, setDate] = useState(new Date());

  const handleChange = (value: Value | Date) => {
    setDate(value);
  }

  return (
    <div className='calendar'>
      <div>
        <Calendar
          onChange={handleChange} 
          value={date} 
          nextLabel='Next'
          prevLabel='Prev'
          />
      </div>
      <p className="calendar__text">
        Selected Date:{' '}
        {date.toDateString()}
      </p>
    </div>
  );
};

export default CalendarApp;
