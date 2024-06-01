import React, { useState } from "react";
import "primeflex/primeflex.css";
import "./index.scss";
import CalendarComponent from "./CalendarComponent";
import BasicDemo from "./DataTabel";
import SvgClockred from "../../../assets/icons/SvgClockRed";
import SvgClockgreen from "../../../assets/icons/SVgClockGreen";
import Status from "./Status";
import RegisterPopup from "./Register/RegisterPopup";
import ToadyActivityCard from "./ToadyActivityCard";
import SvgUpArrow from "../../../assets/icons/SvgUpArrow";
import SvgDownArrow from "../../../assets/icons/SvgDownArrow";

const Attendance = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="grid m-0 attendance__container">
      <div className="col-12 md:col-6 lg:col-6">
        <div className="overview__text">Overview</div>
      </div>
      <div
        onClick={() => setVisible(true)}
        className="col-12 md:col-6 lg:col-6 registe__button__view"
      >
        <div className="registe__button">
          <div>Regularization</div>
        </div>
      </div>
      <div className="col-12 md:col-12 lg:col-6 xl:col-4">
        <div className="grid">
          <div className="col-12">
            <div className="shadow-1 card__view">
              <div className="actual__working__view">
                <div className="actual__text">
                  Actual Working hours
                  <span className="april__text">(April)</span>
                </div>
                <div className="icon__with__text">
                  <SvgUpArrow />
                  <div className="percentage__text">10%</div>
                </div>
              </div>
              <div className="previous__week__data">
                <div className="previous__week__icon">
                  <SvgClockgreen />
                  <div className="previous__text">Previous Week</div>
                </div>
                <div className="previous__time">13 : 00 Hrs</div>
              </div>
              <div className="previous__week__green">
                <div className="previous__week__icon">
                  <SvgClockred />
                  <div className="previous__text">Previous Week</div>
                </div>
                <div className="previous__time">13 : 00 Hrs</div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-2">
            <div className="shadow-1 card__view " >
              <div className="actual__working__view">
                <div className="actual__text">Actual Working hours (April)</div>
                <div className="icon__with__text">
                  <SvgDownArrow />
                  <div className="percentage__text__red">5%</div>
                </div>
              </div>
              <div className="previous__week__data">
                <div className="previous__week__icon">
                  <SvgClockgreen />
                  <div className="previous__text">Previous Week</div>
                </div>
                <div className="previous__time">13 : 00 Hrs</div>
              </div>
              <div className="previous__week__green">
                <div className="previous__week__icon">
                  <SvgClockred />
                  <div className="previous__text">Previous Week</div>
                </div>
                <div className="previous__time">13 : 00 Hrs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 md:col-12 lg:col-6 xl:col-3">
        <ToadyActivityCard />
      </div>
      <div className="col-12 md:col-12 lg:col-12 xl:col-5 mb-3">
        <CalendarComponent />
      </div>
      <div className="col-12 md:col-12 lg:col-12 xl:col-8">
        <BasicDemo />
      </div>
      <div className="col-12 md:col-12 lg:col-12 xl:col-4">
        <Status />
      </div>
      <div>
        <RegisterPopup visible={visible} setVisible={setVisible} />
      </div>
    </div>
  );
};

export default Attendance;
