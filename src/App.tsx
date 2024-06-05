import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./module/dashBoard";
import Layout from "./module/Layout";
import Attendance from "./module/Attendance/AttendanceScreens";
import AttendanceList from "./module/Attendance/AttendanceList";
import Regularization from "./module/Attendance/Regularization";
import LeaveModule from "./module/leaveModule";
import TimeSheetModule from './module/timeSheetModule';
import MyLeavesOverview from './module/managerView/managerLeave/myLeavesOverview'
import TeamLeaves from './module/managerView/managerLeave/teamLeavesOverview/teamLeaves'
import Tasks from "./module/Tasks/TaskScreen/indx";
import AllTasks from "./module/Tasks/AllTasks";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/leave" element={<LeaveModule />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/attendancelist" element={<AttendanceList/>}/>
          <Route path="/regularization" element={<Regularization/>}/>
          <Route path="/timesheet" element={ <TimeSheetModule/>}/>
          <Route path="/myleaves" element={<MyLeavesOverview/>}/>
          <Route path="/teamleaves" element={<TeamLeaves/>}/>
          <Route path="/attendancelist" element={<AttendanceList />} />
          <Route path="/regularization" element={<Regularization />} />
          <Route path="/timesheet" element={<TimeSheetModule />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/alltasks" element={<AllTasks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
