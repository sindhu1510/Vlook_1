import React, { useState } from "react";
import "primeflex/primeflex.css";
import "./index.scss";
import SvgGoBack from "../../../assets/icons/SvgGoBack";
import RequestCards from "./RequestCards";
import RegularizationTabel from "./RegularizationTabel";
import RegurarizationPopup from "./RegurarizationPopup";
// import AttendanceTabel from "./AttendanceTabel";

const Regularization = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="grid  m-0 regularization__list__container">
      <div className="col-12 md:col-6 lg:col-6">
        <div className="arrow__icon__text">
          <SvgGoBack />
          <div className="overview__text">Regularization List</div>
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
        <RequestCards />
       <div className="col-12">
       <RegularizationTabel
       setVisible={setVisible}
       />
       </div>
       <RegurarizationPopup
       visible={visible}
       setVisible={setVisible}
       />
    </div>
  );
};

export default Regularization;
