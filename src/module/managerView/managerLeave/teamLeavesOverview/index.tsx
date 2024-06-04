import TeamLeaves from '../teamLeavesOverview/teamLeaves'
import './index.scss'
const LeaveModule = () => {
  return (
    <div>
       <div className='overall__sidebar__dashboard__layout'>
            {/* <div className='sidebar__layout'>
                Sidebar
            </div> */}
            <div className='dashboard__flex__layout'>
                <TeamLeaves/>
            </div>
            </div>
    </div>
  );
}

export default LeaveModule;
