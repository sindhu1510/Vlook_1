import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./module/dashBoard";
import Layout from "./module/Layout";
import Attendance from "./module/Attendance/AttendanceScreens";
// import AttendanceList from "./module/Attendance/AttendanceList";
// import Regularization from "./module/Attendance/Regularization";
import LeaveModule from "./module/leaveModule";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/leave" element={<LeaveModule/>}/>
          <Route path="/attendance" element={<Attendance />} />
          {/* <Route path="/attendancelist" element={<AttendanceList/>}/>
          <Route path="/regularization" element={<Regularization/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
