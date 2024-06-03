import React from "react";
import { data } from "./data";
import SvgClockgreen from "../../../assets/icons/SVgClockGreen";
import SvgClockred from "../../../assets/icons/SvgClockRed";

const ToadyActivityCard = () => {
  return (
    <div className="card__view__activity shadow-1">
      <div className="today__activity__text">Today’s activity</div>
      <div className="scrollable-container">
        {data.map((val, index) => (
          <div key={index} className="list__data__view">
            <div className="list__data">
              {val.title === "Swipe in at" ? <SvgClockgreen /> : <SvgClockred />}
              <div className="swipe__text">{val.title}</div>
            </div>
            <div>
              <div className="swipe__time__text">{val.time}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="swipe__in__total">
          <div className="swipe__in__total__text">Total swipe in</div>
          <div className="swipe__in__total__num">03 : 00 hrs</div>
        </div>
        <div className="swipe__out__total">
          <div className="swipe__out__total__text">Total swipe out</div>
          <div className="swipe__out__total__num">01 : 30 hrs</div>
        </div>
      </div>
    </div>
  );
};

export default ToadyActivityCard;
