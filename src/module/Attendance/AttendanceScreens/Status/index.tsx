import React from "react";
import SvgNextarrow from "../../../../assets/icons/SvgNextArrow";

const Status = () => {
  return (
    <div className="grid shadow-1 m-0 status__view">
      <div className=" col-12">
        <div className="tabel__view__header__view">
          <div className="regularization__view">Regularization Request Status</div>
          <SvgNextarrow />
        </div>
      </div>
    
       <div className="col-12">
       <div className="total__request__view shadow-1">
          <div className="total__request__flex">
            <div className="total__request">Total Request</div>
            <div className="total__request">10</div>
          </div>
        </div>
        </div>
        <div className="col-12">
        <div className="total__request__Approved shadow-1">
          <div className="total__request__flex">
            <div className="total__request">Approved Request</div>
            <div className="total__request">6</div>
          </div>
        </div>
        </div>
        <div className="col-12">
        <div className="total__request__Rejected shadow-1">
          <div className="total__request__flex">
            <div className="total__request">Rejected Request</div>
            <div className="total__request">3</div>
          </div>
        </div>
        </div>
        <div className="col-12">
        <div className="total__request__Pending shadow-1">
          <div className="total__request__flex">
            <div className="total__request">Pending</div>
            <div className="total__request">1</div>
          </div>
        </div>
        </div>
      </div>
   
  );
};

export default Status;
