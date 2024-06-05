import RequestCards from './RequestCards';
import './index.scss'
// import LeaveCards from '../leaveCards';
import TeamLeavesCards from '../teamLeaves/teamLeavesCards'
import SvgNextarrow from '../../../../../assets/icons/SvgNextArrow';
import LeaveHistoryTable from '../leaveHistoryTable'

const LeavesOverview = () => {
  





    
  return (
    <div className='overall__team__leaves_overview__layout'>
      <div className='leaves__overview__header__text'>
      Leaves 
      </div>
      <div className='overview__text__and__apply mt-7'>
        <div className='leaves__overview__text'>
            Overview
        </div>
        <div>
            <RequestCards/>
        </div>
        <div>
            <TeamLeavesCards/>
        </div>
      <div className='leave__history__next__arrow mt-3'>
        <div className='leave__history__text'>Leave History</div>
        <div>
            <SvgNextarrow/>
        </div>
      </div>
      <div>
        <LeaveHistoryTable/>
      </div>
      </div>
   
    </div>
  );
}

export default LeavesOverview;
