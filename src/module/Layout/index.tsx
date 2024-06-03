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
        {/* <div className="layout__header">Header</div> */}
        <div className="layout__outlet-container p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;


{/* <div className='overall__sidebar__dashboard__layout'>
<div className='sidebar__layout'>
    Sidebar
</div>
<div className='dashboard__flex__layout'>
    <DailyOverView/>
</div>
</div> */}