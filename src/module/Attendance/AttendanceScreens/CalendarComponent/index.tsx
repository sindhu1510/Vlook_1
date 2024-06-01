import React, { useState, useEffect } from "react";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedDate } from "../../../dashBoard/calendar/store/calendarMiddilware";

const CalendarComponent = () => {
  const currentDate = new Date();
  const [date, setDate] = useState<Nullable<Date>>(currentDate);
  const selectedDate = useSelector(
    (state: any) => state.calendar?.selectedDate
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedDate) {
      dispatch(setSelectedDate(currentDate));
    }
  }, [selectedDate, dispatch, currentDate]);

  const handleDateChange = (e: any) => {
    setDate(e.value);
    dispatch(setSelectedDate(e.value));
  };

  const highlightDates = ["2024-05-07"];

  const dateTemplate = (dateInfo: any) => {
    const formattedDate = dateInfo.day.toString().padStart(2, "0");
    const month = (dateInfo.month + 1).toString().padStart(2, "0");
    const year = dateInfo.year.toString();
    const fullDate = `${year}-${month}-${formattedDate}`;
    const isHighlighted = highlightDates.includes(fullDate);

    const isCustomLabel = dateInfo.day === 7;
    const isSelectedDate =
      date &&
      new Date(date).getDate() === dateInfo.day &&
      new Date(date).getMonth() === dateInfo.month &&
      new Date(date).getFullYear() === dateInfo.year;

    return (
      <div className="date-container">
        <div className={`custom-date ${isHighlighted ? "highlight" : ""}`}>
          {isCustomLabel ? (
            <div className="cl-circle">
              CL
              {isHighlighted && <div className="red-dot"></div>}
            </div>
          ) : (
            <div className="regular-date">{dateInfo.day}</div>
          )}
        </div>
        {isSelectedDate && <div className="blue-dot"></div>}
      </div>
    );
  };

  return (
    <div className=" calendar__layout__attedance shadow-1">
      <div className="calendar__View">
        <div className="calendar__sub__view">Calendar</div>

        <div className="calendar__text__view">
          <div className="dot"></div>
          <div className="casual__text">CL - Casual leave</div>
        </div>
      </div>
      <div className="dashboard__calendar__style">
        <div className="calendar__card">
          <Calendar
            value={date}
            onChange={handleDateChange}
            inline
          
            className=" calendar__style shadow-1 border-0"
            dateTemplate={dateTemplate}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
