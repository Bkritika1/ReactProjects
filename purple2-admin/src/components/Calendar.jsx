// import './Calendar.css';

// const Calendar = () => {
//   return (
//     <div className="calendar-container">
//       <div className="calendar-header">
//         <span>&laquo;</span>
//         <h2>July 2025</h2>
//         <span>&raquo;</span>
//       </div>
//       <div className="calendar-weekdays">
//         {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
//           <div key={d}>{d}</div>
//         ))}
//       </div>
//       <div className="calendar-days">
//         {Array.from({ length: 42 }, (_, i) => {
//           const day = i - 2;
//           return (
//             <div key={i} className={`day ${day === 14 ? 'active' : ''}`}>
//               {day > 0 && day <= 31 ? day : ''}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Calendar;


import React, { useState } from 'react';
import './Calendar.css';

const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const today = new Date();

  const cells = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
    cells.push(<div key={`empty-${i}`}></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isToday =
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    cells.push(
      <div
        key={day}
        className={`day ${isToday ? 'active' : ''}`}
      >
        {day}
      </div>
    );
  }

  const handlePrev = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNext = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const monthName = currentDate.toLocaleString('default', { month: 'long' });

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrev}>&laquo;</button>
        <h2>{monthName} {year}</h2>
        <button onClick={handleNext}>&raquo;</button>
      </div>

      <div className="calendar-weekdays">
        {weekdays.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="calendar-days">
        {cells}
      </div>
    </div>
  );
};

export default Calendar;
