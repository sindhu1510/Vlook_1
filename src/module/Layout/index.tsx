import React from "react";
import "./index.scss";
import SideBar from "../../common/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout__container">
      <div className="sideView " >
      <SideBar />
      </div>
      <div className="layout__main-content">
        <div className="layout__header">Header</div>
        <div className="layout__outlet-container p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
