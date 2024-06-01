import React from 'react';
import { Link } from 'react-router-dom';
import "../SideBar/index.scss";

const SideBar = () => {
  return (
    <div className='overall__sidebar__Layout'>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/attendance">Attendance</Link></li>
      </ul>
    </div>
  );
};

export default SideBar;
