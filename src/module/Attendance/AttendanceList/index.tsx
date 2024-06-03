import React, { useState } from "react";
import "primeflex/primeflex.css";
import "./index.scss";
import AttendanceTabel from "./AttendanceTabel";
import SvgGoBack from "../../../assets/icons/SvgGoBack";
import AttendanceListPopup from "./AttendanceListPopup";
import { Calendar } from "primereact/calendar";
import SvgCalendar from "../../../assets/icons/SvgCalendar";

const AttendanceList = () => {
  const [visible, setVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date("2023-05-31"));
  return (
    <div className="grid  m-0 attendance__list__container">
      <div className="col-12 md:col-6 lg:col-6">
        <div className="arrow__icon__text">
          <SvgGoBack />
          <div className="overview__text"> Attendance List</div>
        </div>
      </div>
      <div
        onClick={() => setVisible(true)}
        className="col-12 md:col-6 lg:col-6 registe__button__view"
      >
        <div className="registe__button">
          <div>Regularization</div>
        </div>
      </div>
      <div className="col-6"></div>
      <div className="col-12 md:col-12 lg:col-6 calendar__view__header">
        <div className=" col-6 md:col-6 lg:col-5 calendar__view">
          <div className="from__to__text">
            From <span className="ml-1">:</span>
          </div>
          <Calendar
           placeholder="Date"
            className="calendar__box"
            id="buttondisplay1"
            value={selectedDate}
            onChange={(e: any) => setSelectedDate(e.value)}
            showIcon
            icon={() => <SvgCalendar />}
          />
        </div>
        <div className=" col-6 md:col-6 lg:col-5 calendar__view">
          <div className="from__to__text">
            To <span className="ml-1">:</span>
          </div>
          <Calendar
          placeholder="Date"
            className="calendar__box"
            id="buttondisplay1"
            value={selectedDate}
            onChange={(e: any) => setSelectedDate(e.value)}
            showIcon
            icon={() => <SvgCalendar />}
          />
        </div>
      </div>

      <div className="col-12 md:col-12 lg:col-12 ">
        <AttendanceTabel setVisible={setVisible} visible={visible} />
      </div>
      <AttendanceListPopup setVisible={setVisible} visible={visible} />
    </div>
  );
};

export default AttendanceList;
