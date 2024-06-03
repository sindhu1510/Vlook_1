import React from "react";
import "./index.scss";
import OpenTask from "./OpenTask";
import TasksTabel from "./TasksTabel";
import SvgTimeProgressIcon from "../../assets/icons/SvgTimeProgress";

const Tasks = () => {
  return (
    <div className="grid m-0 tasks__container">
      <div className="col-4">
        <div>
          <div>In-progress</div>
          <SvgTimeProgressIcon />
        </div>
      </div>
      <div className="col-4">Tasks</div>
      <div className="col-4">Tasks</div>
      {/* <div className="col-4 ">
        <div className="card shodow-1 bg-white">
          <OpenTask />
        </div>
      </div>
      <div className="col-8 ">
        <div className="card shodow-1 bg-white">
        <TasksTabel />
        </div>
       
      </div> */}
    </div>
  );
};

export default Tasks;
