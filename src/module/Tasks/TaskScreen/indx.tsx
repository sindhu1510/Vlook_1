import React from "react";
import "./index.scss";
import OpenTask from "./OpenTask";
import TasksTabel from "./TasksTabel";
import SvgTimeProgressIcon from "../../../assets/icons/SvgTimeProgress";
import SvgPolygon from "../../../assets/icons/SvgPolygon";
import SvgAlertProgress from "../../../assets/icons/SvgAlertProgress";
import SvgSucess from "../../../assets/icons/SvgSucess";
import SvgDownPolygon from "../../../assets/icons/SvgDownPolygon";
import HorizontalBar from "./HarizontalChar";
import TasksOverDue from "./TasksOverDue";

const Tasks = () => {
  return (
    <div className="grid m-0 tasks__container">
      <div className="col-12 md:col-12 lg:col-12 xl:col-4 p-3">
        <div className="in__progress__view shadow-1">
          <div className="inprogrss__view">
            <div className="inprogress__text">In-progress </div>
            <SvgTimeProgressIcon />
          </div>
          <div className="border__with__text">
            <div className="drop__down__view">
              <div className="num__text">13</div>
              <div className="polygon__icon">
                <SvgPolygon color="#E05A00" />
              </div>
            </div>
          </div>
          <div className="task__text_progress">Tasks currently in progress</div>
        </div>
      </div>
      <div className="col-12 md:col-12 lg:col-12 xl:col-4 p-3">
        <div className="in__progress__view shadow-1">
          <div className="inprogrss__view">
            <div className="inprogress__text">Pending</div>
            <SvgAlertProgress />
          </div>
          <div className="border__with__text">
            <div className="drop__down__view__pending">
              <div className="num__text__pending">5</div>
              <div className="polygon__icon">
                <SvgDownPolygon />
              </div>
            </div>
          </div>
          <div className="task__text_progress">Tasks currently in progress</div>
        </div>
      </div>
      <div className="col-12 md:col-12 lg:col-12 xl:col-4 p-3">
        <div className="in__progress__view shadow-1">
          <div className="inprogrss__view">
            <div className="inprogress__text">Completed</div>
            <SvgSucess />
          </div>
          <div className="border__with__text">
            <div className="drop__down__view__Completed">
              <div className="num__text__completed">300</div>
              <div className="polygon__icon">
                <SvgPolygon color="#00AA00" />
              </div>
            </div>
          </div>
          <div className="task__text_progress">Tasks currently in progress</div>
        </div>
      </div>
      <div className="col-12 md:col-12 lg:col-12 xl:col-4 p-3 ">
          <OpenTask />
      </div>
      <div className="col-12 md:col-12 lg:col-12 xl:col-8 p-3">
        <TasksTabel />
      </div>
      <div className="col-12 md:col-12 lg:col-12 xl:col-12 p-3">
        <HorizontalBar />
      </div>
      <div className="col-12 md:col-12 lg:col-12 xl:col-12 p-3">
        <TasksOverDue />
      </div>
    </div>
  );
};

export default Tasks;
