import { Dialog } from "primereact/dialog";
import React from "react";
import SvgClockgreen from "../../../assets/icons/SVgClockGreen";
import SvgClockred from "../../../assets/icons/SvgClockRed";
import { popupData } from "./popupData";

type RegularizationProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const AttendanceListPopup: React.FC<RegularizationProps> = ({
  visible,
  setVisible,
}) => {
  return (
    <div>
      <Dialog
        header="Attendance Detail view"
        visible={visible}
        style={{ width: "32vw",  }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <div className="grid">
          <div className="col-12 date">
            <span>Date :</span> 20/04/2024
          </div>
          <div className="col-12 md:col-12 lg:col-12 xl:col-6">
            <div className="card__greeen__view">
              <div className="card__greeen">
                <SvgClockgreen />
                <div className="login__text">Login at</div>
              </div>
              <div className="time">10 : 00 AM</div>
            </div>
          </div>
          <div className="col-12 md:col-12 lg:col-12 xl:col-6">
            <div className="card__greeen__view">
              <div className="card__greeen">
                <SvgClockred />
                <div className="login__text">Logout at</div>
              </div>
              <div className="time">10 : 00 AM</div>
            </div>
          </div>
          <div className="col-12 md:col-12 lg:col-12 xl:col-6">
            <div className="total__working__hours">
              <div className="total__working__text">Total Working hrs</div>
              <div className="total__working__text__time">08 : 00 hrs</div>
            </div>
          </div>
          <div className="col-12 md:col-12 lg:col-12 xl:col-6">
            <div className="total__working__hours">
              <div className="total__working__text">Total Break hrs</div>
              <div className="total__working__text__time">01 : 00 hrs</div>
            </div>
          </div>
          <div className="col-12">
            <div className="history__text">History</div>
          </div>
          <div className="col-12 fixed-height-container">
            {popupData.map((val, index) => {
              return (
                <div className="items__view" key={index}>
                  <div className="green__red__view">
                    {val.icon === "green" ? <SvgClockgreen /> : <SvgClockred />}
                    <div className="swipe__text">{val.title}</div>
                  </div>
                  <div className="swipe__text">{val.time}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default AttendanceListPopup;
